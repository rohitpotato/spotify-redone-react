import React from "react";
import PropTypes from "prop-types";
import useAppStore from "../../stores/useAppStore";
import { tabs } from "../../constants";

const setCurrentTabSelector = (state) => state.setCurrentTab;
const setArtistInfoSelector = (state) => state.setArtistInfo;

const RelatedArtistCard = ({ image, artistName, artistId }) => {
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setArtistInfo = useAppStore(setArtistInfoSelector);

  const handleArtistClick = () => {
    setCurrentTab(tabs.ARTIST);
    setArtistInfo({ artistId, artistName, image });
  };

  return (
    <button
      onClick={handleArtistClick}
      type="button"
      className="flex items-center space-between py-2 space-x-4 focus:outline-none"
    >
      <img
        src={image}
        className="rounded-full h-10 w-10 hover:scale-110 transform-gpu transition-transform duration-150"
        alt="image_artist"
      />
      <span className="dark:text-white font-semibold tracking-wider hover:underline">
        {artistName}
      </span>
    </button>
  );
};

RelatedArtistCard.defaultProps = {
  image: "",
  artistName: "",
  artistId: "",
};

RelatedArtistCard.propTypes = {
  image: PropTypes.string,
  artistName: PropTypes.string,
  artistId: PropTypes.string,
};

export default RelatedArtistCard;
