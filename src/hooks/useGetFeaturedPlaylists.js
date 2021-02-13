import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetFeaturedPlaylists() {
  const token = useAuthStore(tokenSelector);
  const featuredPlaylistsQuery = useQuery(
    queryKeys.FEATURED_PLAYLISTS,
    () => request("/browse/featured-playlists"),
    {
      enabled: !!token,
    }
  );
  return featuredPlaylistsQuery;
}
