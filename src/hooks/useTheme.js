import { useEffect } from "react";
import useThemeStore from "../stores/useThemeStore";
import { storeThemePreference } from "../utils/themeUtils";

const selector = (state) => state.theme;
export const useTheme = () => {
  const theme = useThemeStore(selector);
  useEffect(() => {
    storeThemePreference(theme);
  }, [theme]);
};
