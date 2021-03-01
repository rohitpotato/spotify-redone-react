import React from "react";
import useThemeStore from "../stores/useThemeStore";
import { THEME_TYPES } from "../constants";

const themeSelector = (state) => state.theme;
const Loader = () => {
  const theme = useThemeStore(themeSelector);
  return (
    <div className="z-10 flex fixed top-14 right-1 px-2 py-2">
      <svg
        className="h-8 w-8"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enableBackground="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <rect
          fill={`${theme !== THEME_TYPES.THEME_DARK ? "#000" : "#fff"}`}
          width="3"
          height="100"
          transform="translate(0) rotate(180 3 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
          />
        </rect>
        <rect
          x="17"
          fill={`${theme !== THEME_TYPES.THEME_DARK ? "#000" : "#fff"}`}
          width="3"
          height="100"
          transform="translate(0) rotate(180 20 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s"
          />
        </rect>
        <rect
          x="40"
          fill={`${theme !== THEME_TYPES.THEME_DARK ? "#000" : "#fff"}`}
          width="3"
          height="100"
          transform="translate(0) rotate(180 40 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.3s"
          />
        </rect>
        <rect
          x="60"
          fill={`${theme !== THEME_TYPES.THEME_DARK ? "#000" : "#fff"}`}
          width="3"
          height="100"
          transform="translate(0) rotate(180 58 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </rect>
        <rect
          x="80"
          fill={`${theme !== THEME_TYPES.THEME_DARK ? "#000" : "#fff"}`}
          width="3"
          height="100"
          transform="translate(0) rotate(180 76 50)"
        >
          <animate
            attributeName="height"
            attributeType="XML"
            dur="1s"
            values="30; 100; 30"
            repeatCount="indefinite"
            begin="0.1s"
          />
        </rect>
      </svg>
    </div>
  );
};

export default Loader;
