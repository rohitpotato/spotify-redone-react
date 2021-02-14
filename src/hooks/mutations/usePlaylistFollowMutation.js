import { useMutation, useQueryClient } from "react-query";
import request from "../../utils/axiosClient";
import { queryKeys } from "../../constants/index";

export default function usePlaylistFollowMutation({ isFollowing, playlistId }) {
  const requestMethod = isFollowing === true ? "delete" : "put";
  const toFollowRequest = () =>
    request[requestMethod](`playlists/${playlistId}/followers`);
  const queryClient = useQueryClient();
  const toggleFollow = useMutation(toFollowRequest, {
    onMutate: async (value) => {
      await queryClient.cancelQueries(queryKeys.PLAYLIST_FOLLOW_STATUS);
      const previousValue = queryClient.getQueryData([
        queryKeys.PLAYLIST_FOLLOW_STATUS,
        playlistId,
      ]);
      queryClient.setQueryData(
        [queryKeys.PLAYLIST_FOLLOW_STATUS, playlistId],
        (old) => ({
          ...old,
          data: [value],
        })
      );

      return () =>
        queryClient.setQueryData(
          queryKeys.PLAYLIST_FOLLOW_STATUS,
          previousValue
        );
    },
    onError: (_, __, rollback) => {
      rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.PLAYLIST_FOLLOW_STATUS);
    },
  });
  return toggleFollow;
}
