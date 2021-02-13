import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetCategoryList() {
  const token = useAuthStore(tokenSelector);
  const getCategoriesQuery = useQuery(
    queryKeys.CATEGORY_LIST,
    () => request("/browse/categories"),
    {
      enabled: !!token,
    }
  );
  return getCategoriesQuery;
}
