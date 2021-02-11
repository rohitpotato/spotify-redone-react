import { useEffect } from "react";
import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";
import useAppStore from "../stores/useAppStore";

const tokenSelector = (state) => state.token;
const setIsUpdatingSelector = (state) => state.setIsUpdating;

export default function useGetFeaturedPlaylists() {
  const token = useAuthStore(tokenSelector);
  const setIsUpdating = useAppStore(setIsUpdatingSelector);
  const featuredPlaylistsQuery = useQuery(
    queryKeys.FEATURED_PLAYLISTS,
    () => request("/browse/featured-playlists"),
    {
      enabled: !!token,
      retry: 2,
    }
  );

  useEffect(() => {
    if (featuredPlaylistsQuery.isFetching) {
      setIsUpdating(true);
    } else {
      setIsUpdating(false);
    }
  }, [featuredPlaylistsQuery.isFetching, setIsUpdating]);

  return featuredPlaylistsQuery;
}
