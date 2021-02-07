import React from "react";
import { iconSize } from "../constants";

const PreviousIcon = () => {
  return (
    <button type="button" className="focus:outline-none">
      <svg
        className={`${iconSize} dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const NextIcon = () => {
  return (
    <button type="button" className="focus:outline-none">
      <svg
        className={`${iconSize} dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export { PreviousIcon, NextIcon };
