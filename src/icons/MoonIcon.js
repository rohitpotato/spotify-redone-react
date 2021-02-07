import React from "react";
import { iconSize } from "../constants";
import useThemeStore from "../stores/useThemeStore";

const selector = (state) => state.toggleTheme;

const Moon = () => {
  const toggleTheme = useThemeStore(selector);
  return (
    <button className="focus:outline-none" type="button" onClick={toggleTheme}>
      <svg
        className={iconSize}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    </button>
  );
};

export default Moon;
