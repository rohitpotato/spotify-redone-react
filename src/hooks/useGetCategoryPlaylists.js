import { useEffect } from "react";
import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";
import useAppStore from "../stores/useAppStore";

const tokenSelector = (state) => state.token;
const setIsUpdatingSelector = (state) => state.setIsUpdating;

export default function useGetCategoryPlaylists({ id }) {
  const token = useAuthStore(tokenSelector);
  const setIsUpdating = useAppStore(setIsUpdatingSelector);
  const categoryPlaylistQuery = useQuery(
    [queryKeys.FEATURED_PLAYLISTS, id],
    () => request(`/browse/categories/${id}/playlists`),
    {
      enabled: !!token,
      retry: 2,
    }
  );

  useEffect(() => {
    if (categoryPlaylistQuery.isFetching) {
      setIsUpdating(true);
    } else {
      setIsUpdating(false);
    }
  }, [categoryPlaylistQuery.isFetching, setIsUpdating]);

  return categoryPlaylistQuery;
}
