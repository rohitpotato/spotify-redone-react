import React from "react";
import SearchIcon from "../../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div>
      <button
        type="button"
        className="rounded-lg bg-gray-400 dark:bg-white py-1 px-4 flex items-center focus:outline-none w-full overflow-x-hidden cursor-text"
      >
        <SearchIcon />
        <span className="text-sm text-gray-400">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
