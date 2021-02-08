import create from "zustand";
import { persist } from "zustand/middleware";
import { localStorageKeys, THEME_TYPES } from "../constants";

const { THEME_LIGHT, THEME_DARK } = THEME_TYPES;

const useThemeStore = create(
  persist(
    (set) => ({
      theme: THEME_LIGHT,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT,
        })),
    }),
    {
      name: localStorageKeys.THEME,
    }
  )
);

export default useThemeStore;
