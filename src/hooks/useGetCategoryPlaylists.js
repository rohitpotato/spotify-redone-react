import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetCategoryPlaylists({ id }) {
  const token = useAuthStore(tokenSelector);
  const categoryPlaylistQuery = useQuery(
    [queryKeys.FEATURED_PLAYLISTS, id],
    () => request(`/browse/categories/${id}/playlists`),
    {
      enabled: !!token,
    }
  );
  return categoryPlaylistQuery;
}
