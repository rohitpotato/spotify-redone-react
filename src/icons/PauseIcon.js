import React from "react";
import PropTypes from "prop-types";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @return {HTMLInputElement}
 */

const PauseIcon = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="focus:outline-none">
      <svg
        className="h-12 w-12 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default PauseIcon;

PauseIcon.defaultProps = {
  onClick: () => {},
};

PauseIcon.propTypes = {
  onClick: PropTypes.func,
};
