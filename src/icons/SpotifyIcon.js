import React from "react";
import { THEME_TYPES } from "../constants/index";
import useThemeStore from "../stores/useThemeStore";

const SpotifyIcon = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <svg
      className="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      aria-describedby="desc"
      aria-labelledby="title"
      viewBox="0 0 64 64"
    >
      <path
        fill={`${theme === THEME_TYPES.THEME_LIGHT ? "white" : "202020"}`}
        d="M32 0a32 32 0 1032 32A31.966 31.966 0 0032 0zm12.3 47.2a2.654 2.654 0 01-1.4-.5 32.041 32.041 0 00-16.6-4.3 48.082 48.082 0 00-10.1 1.1 11.045 11.045 0 01-1.6.3 2 2 0 01-2-2 2.11 2.11 0 011.7-2.2 53.9 53.9 0 0112-1.4A35.787 35.787 0 0144.9 43a2.131 2.131 0 011.3 2.1 1.846 1.846 0 01-1.9 2.1zm3.5-8.5a2.834 2.834 0 01-1.6-.6A41.422 41.422 0 0025.9 33a43.3 43.3 0 00-10.4 1.3 4.707 4.707 0 01-1.6.4 2.476 2.476 0 01-2.5-2.5 2.6 2.6 0 012-2.7A43.762 43.762 0 0126 27.7a44.707 44.707 0 0122.8 5.9 2.583 2.583 0 011.5 2.5 2.5 2.5 0 01-2.5 2.6zm4-9.8a3.022 3.022 0 01-1.6-.5C44.3 24.9 35.3 23 26.7 23a49.826 49.826 0 00-12.8 1.5 9.005 9.005 0 01-1.6.3 3.031 3.031 0 01-3-3.1 3.213 3.213 0 012.2-3.1 55.906 55.906 0 0115.2-2c9.4 0 19.3 1.9 26.5 6.2a3.025 3.025 0 011.6 2.9 3.058 3.058 0 01-3 3.2z"
        data-name="layer1"
      />
    </svg>
  );
};

export default SpotifyIcon;
