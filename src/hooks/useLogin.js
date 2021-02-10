import { useLayoutEffect } from "react";
import useAuthStore from "../stores/useAuthStore";
import {
  getTokenFromUrl,
  removeAxiosAuthHeader,
  setAxiosHeaders,
} from "../utils/authUtils";

const setTokenSelector = (state) => state.setToken;
const setIsAuthenticatedSelector = (state) => state.setIsAuthenticated;

export default function useLogin() {
  const setToken = useAuthStore(setTokenSelector);
  const setIsAuthenticated = useAuthStore(setIsAuthenticatedSelector);

  useLayoutEffect(() => {
    const token = getTokenFromUrl();
    if (token) {
      setAxiosHeaders(token);
      setToken(token);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      removeAxiosAuthHeader();
    }
  }, [setToken, setIsAuthenticated]);
}
