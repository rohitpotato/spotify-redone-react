import { useEffect } from "react";
import useThemeStore from "../stores/useThemeStore";
import { applyThemePreference } from "../utils/themeUtils";

const selector = (state) => state.theme;
export const useTheme = () => {
  const theme = useThemeStore(selector);
  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);
};
