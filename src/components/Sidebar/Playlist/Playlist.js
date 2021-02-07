import React from "react";
import PropTypes from "prop-types";

const Playlist = ({ list }) => {
  return (
    <ul className="list-none flex flex-col justify-start text-center">
      {list.map((l) => {
        return (
          <button
            type="button"
            key={Math.random()}
            className="text-sm font-semibold my-2 text-gray-500 tracking-wide hover:text-gray-900 dark:hover:text-white w-full focus:outline-none transition"
          >
            <span className="flex">{l}</span>
          </button>
        );
      })}
    </ul>
  );
};

export default Playlist;

Playlist.defaultProps = {
  list: [],
};

Playlist.propTypes = {
  list: PropTypes.array,
};
