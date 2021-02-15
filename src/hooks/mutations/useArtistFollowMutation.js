import { useMutation, useQueryClient } from "react-query";
import request from "../../utils/axiosClient";
import { queryKeys } from "../../constants/index";

export default function useArtistFollowMutation({
  isFollowing,
  artistId,
  type = "artist",
}) {
  const requestMethod = isFollowing === true ? "delete" : "put";
  const toFollowRequest = () =>
    request[requestMethod](`/me/following?ids=${artistId}&type=${type}`);
  const queryClient = useQueryClient();
  const toggleFollow = useMutation(toFollowRequest, {
    onMutate: async (value) => {
      await queryClient.cancelQueries(queryKeys.ARTIST_FOLLOW_STATUS);
      const previousValue = queryClient.getQueryData([
        queryKeys.ARTIST_FOLLOW_STATUS,
        artistId,
      ]);
      queryClient.setQueryData(
        [queryKeys.ARTIST_FOLLOW_STATUS, artistId],
        (old) => ({
          ...old,
          data: [value],
        })
      );

      return () =>
        queryClient.setQueryData(queryKeys.ARTIST_FOLLOW_STATUS, previousValue);
    },
    onError: (_, __, rollback) => {
      rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries(queryKeys.ARTIST_FOLLOW_STATUS);
    },
  });
  return toggleFollow;
}
