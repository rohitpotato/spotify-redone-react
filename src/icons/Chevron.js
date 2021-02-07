import React from "react";
import { iconSize } from "../constants";

const ChevronLeft = () => {
  return (
    <button className="focus:outline-none" type="button">
      <svg
        className={`${iconSize} text-black dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

const ChevronRight = () => {
  return (
    <button className="focus:outline-none" type="button">
      <svg
        className={`${iconSize} text-black dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export { ChevronLeft, ChevronRight };
