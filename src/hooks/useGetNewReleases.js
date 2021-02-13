import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetNewReleases() {
  const token = useAuthStore(tokenSelector);
  const newReleasesQuery = useQuery(
    queryKeys.NEW_RELEASES,
    () => request("/browse/new-releases"),
    {
      enabled: !!token,
    }
  );

  return newReleasesQuery;
}
