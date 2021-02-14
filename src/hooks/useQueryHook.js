import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";

const tokenSelector = (state) => state.token;

export default function useQueryHook({
  key,
  url,
  id = undefined,
  config = {},
}) {
  const token = useAuthStore(tokenSelector);
  let enabled = !!token;
  if (id) {
    enabled = Boolean(id && token);
  }
  const queryData = useQuery(key, () => request.get(url), {
    enabled,
    ...config,
  });

  return queryData;
}
