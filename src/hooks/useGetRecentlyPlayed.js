import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetRecentlyPlayed() {
  const token = useAuthStore(tokenSelector);
  const recentlyPlayedQuery = useQuery(
    queryKeys.RECENTLY_PLAYED,
    () => request("/me/player/recently-played?limit=50"),
    {
      enabled: !!token,
    }
  );

  return recentlyPlayedQuery;
}
