import React from "react";
import PropTypes from "prop-types";

const SearchResultCard = ({ image, title, subTitle, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center space-x-4 dark:hover:bg-gray-900 py-2 px-4 hover:bg-gray-100 focus:outline-none text-left"
    >
      {image && (
        <div className="flex-shrink-0">
          <img
            src={image}
            className="object-fit h-16 w-16 rounded-md"
            alt="pc"
          />
        </div>
      )}
      <div>
        <span className="dark:text-white block font-semibold text-base tracking-wide">
          {title}
        </span>
        <span className="dark:text-white block text-sm tracking-wide">
          {subTitle}
        </span>
      </div>
    </button>
  );
};

SearchResultCard.defaultProps = {
  image: "",
  title: "",
  subTitle: "",
  onClick: () => {},
};

SearchResultCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default SearchResultCard;
