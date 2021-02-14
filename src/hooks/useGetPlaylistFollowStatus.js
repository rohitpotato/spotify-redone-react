import { useQuery, useQueryClient } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;
export default function useGetPlaylistFollowStatus({ id }) {
  const queryClient = useQueryClient();
  const userProfileQuery = queryClient.getQueryData(queryKeys.USER_PROFILE);
  const userId = userProfileQuery.data?.id;
  const token = useAuthStore(tokenSelector);
  const playlistFollowStatus = useQuery(
    [queryKeys.PLAYLIST_FOLLOW_STATUS, id],
    () => request.get(`/playlists/${id}/followers/contains?ids=${userId}`),
    {
      enabled: Boolean(token && id && userId),
    }
  );

  return playlistFollowStatus;
}
