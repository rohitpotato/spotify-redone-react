import { useEffect } from "react";
import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";
import useAppStore from "../stores/useAppStore";

const tokenSelector = (state) => state.token;
const setIsUpdatingSelector = (state) => state.setIsUpdating;

export default function useGetNewReleases() {
  const token = useAuthStore(tokenSelector);
  const setIsUpdating = useAppStore(setIsUpdatingSelector);
  const newReleasesQuery = useQuery(
    queryKeys.NEW_RELEASES,
    () => request("/browse/new-releases"),
    {
      enabled: !!token,
      retry: 2,
    }
  );

  useEffect(() => {
    if (newReleasesQuery.isFetching) {
      setIsUpdating(true);
    } else {
      setIsUpdating(false);
    }
  }, [newReleasesQuery.isFetching, setIsUpdating]);

  return newReleasesQuery;
}
