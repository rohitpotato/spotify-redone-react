import create from "zustand";
import { THEME_TYPES } from "../constants";
import { getInitialTheme } from "../utils/themeUtils";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

const useThemeStore = create((set) => ({
  theme: getInitialTheme(),
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK,
    }));
  },
}));

export default useThemeStore;
