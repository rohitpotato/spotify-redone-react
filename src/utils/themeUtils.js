import { THEME_TYPES } from "../constants";

const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const preferredTheme = window.localStorage.getItem("theme");
    if (preferredTheme) {
      return preferredTheme;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return THEME_DARK;
    }
  }
  return THEME_LIGHT;
};

// for tailwind css, need the change the root
export const storeThemePreference = (theme) => {
  const root = window.document.documentElement;
  const isDark = theme === THEME_DARK;
  root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
};
