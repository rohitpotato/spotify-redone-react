import React, { useState } from "react";
import SearchResults from "../../Containers/SearchView/SearchResults.js/SearchResults";
import useDebounce from "../../hooks/useDebounce";
import SearchIcon from "../../icons/SearchIcon";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce({ value: query, delay: 500 });

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="flex items-center focus:border-blue-300 border-2 space-x-2 py-2 px-4 rounded">
        <SearchIcon />
        <input
          className="border-none focus:outline-none w-full bg-transparent dark:text-white text-base font-semibold"
          placeholder="Search"
          onChange={handleInputChange}
        />
      </div>
      <div className="py-8">
        <SearchResults sTerm={debouncedValue} />
      </div>
    </>
  );
};

export default SearchBar;
