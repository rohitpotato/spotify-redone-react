// eslint-disable-next-line no-unused-vars
import { useQuery, UseQueryOptions, QueryKey } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";

const tokenSelector = (state) => state.token;

/**
 *
 * @param {object} param -
 * @param {QueryKey} param.key - Unique Query Key for your query similar to react-query
 * @param {string} param.url - Url for your query
 * @param {string} param.id- Second value - Pass any ID to your query
 * @param {UseQueryOptions} param.config - Config for query similar to react-query options object
 */

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
