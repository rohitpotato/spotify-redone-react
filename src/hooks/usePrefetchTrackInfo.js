// returns tracks follow status
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import request from "../utils/axiosClient";
import { queryKeys } from "../constants";

export default function usePrefetchTrackInfo({ list = [] }) {
  const queryClient = useQueryClient();
  useEffect(() => {
    if (list.length) {
      const ids = list.map((l) => l.id).join(",");
      const fetchFollowStatus = () =>
        request.get(`/me/tracks/contains?ids=${ids}`);
      queryClient.prefetchQuery(
        queryKeys.TRACK_SAVED_STATUS,
        fetchFollowStatus
      );
    }
  }, [list, list.length, queryClient]);
}
