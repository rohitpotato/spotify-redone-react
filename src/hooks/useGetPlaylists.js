import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetPlaylists() {
  const token = useAuthStore(tokenSelector);
  const playlistQuery = useQuery(
    queryKeys.USER_PLAYLISTS,
    () => request("/me/playlists"),
    {
      enabled: !!token,
    }
  );

  return playlistQuery;
}
