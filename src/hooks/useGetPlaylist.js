import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetPlaylist({ id }) {
  const token = useAuthStore(tokenSelector);
  const playlistQuery = useQuery(
    [queryKeys.PLAYLIST, id],
    () => request(`/playlists/${id}`),
    {
      enabled: Boolean(token && id),
    }
  );

  return playlistQuery;
}
