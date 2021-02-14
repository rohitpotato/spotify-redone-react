import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useGetUserProfile from "./useGetUserProfile";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;
export default function useGetPlaylistFollowStatus({ id }) {
  const userProfileQuery = useGetUserProfile();
  const userId = userProfileQuery.data?.data?.id;
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
