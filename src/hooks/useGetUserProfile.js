import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;
export default function useGetUserProfile() {
  const token = useAuthStore(tokenSelector);
  const userProfile = useQuery(
    queryKeys.USER_PROFILE,
    () => request.get(`/me`),
    {
      enabled: !!token,
    }
  );

  return userProfile;
}
