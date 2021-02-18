import React from "react";
import PropTypes from "prop-types";

const CardView = ({ imageUrl, name, description, onCardClick }) => {
  const onClick = () => {
    onCardClick();
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="space-y-2 focus:outline-none max-w-full"
    >
      <div>
        <img
          src={imageUrl}
          className="rounded transform-gpu hover:scale-90 hover:opacity-80 transition-transform duration-150 max-h-64 max-w-2xl"
          alt="album_cover"
        />
      </div>
      <div>
        <span className="block font-bold text-base text-black dark:text-white hover:underline cursor-pointer">
          {name}
        </span>
        <span className="block text-sm text-gray-500 dark:text-gray-500">
          {description}
        </span>
      </div>
    </button>
  );
};

CardView.defaultProps = {
  imageUrl: "",
  name: "",
  description: "",
  onCardClick: () => {},
};

CardView.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onCardClick: PropTypes.func,
};

export default React.memo(CardView);
