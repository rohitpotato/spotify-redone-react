import React from "react";
import PropTypes from "prop-types";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @return {HTMLInputElement}
 */

const PlayIcon = ({ onClick }) => {
  return (
    <button className="focus:outline-none" type="button" onClick={onClick}>
      <svg
        className="h-12 w-12 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default PlayIcon;

PlayIcon.defaultProps = {
  onClick: () => {},
};

PlayIcon.propTypes = {
  onClick: PropTypes.func,
};
