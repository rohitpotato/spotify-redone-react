import { useEffect } from "react";
import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import useAppStore from "../stores/useAppStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;
const setIsUpdatingSelector = (state) => state.setIsUpdating;

export default function useGetCategoryList() {
  const token = useAuthStore(tokenSelector);
  const setIsUpdating = useAppStore(setIsUpdatingSelector);
  const getCategoriesQuery = useQuery(
    queryKeys.CATEGORY_LIST,
    () => request("/browse/categories"),
    {
      enabled: !!token,
      retry: 2,
    }
  );

  useEffect(() => {
    if (getCategoriesQuery.isFetching) {
      setIsUpdating(true);
    } else {
      setIsUpdating(false);
    }
  }, [getCategoriesQuery.isFetching, setIsUpdating]);

  return getCategoriesQuery;
}
