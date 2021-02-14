import React from "react";
import PropTypes from "prop-types";
import useAppStore from "../../stores/useAppStore";
import { tabs } from "../../constants";

const setCurrentTabSelector = (state) => state.setCurrentTab;
const setArtistInfoSelector = (state) => state.setArtistInfo;

const ArtistCard = ({ image, artistName, artistId }) => {
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setArtistInfo = useAppStore(setArtistInfoSelector);

  const handleArtistClick = () => {
    setCurrentTab(tabs.ARTIST);
    setArtistInfo({ artistId, artistName, image });
  };

  return (
    <button
      type="submit"
      className="focus:outline-none"
      onClick={handleArtistClick}
    >
      <img
        src={image}
        alt="Artist Card"
        className="transform-gpu hover:scale-90 hover:opacity-80 transition-transform duration-150 max-h-64 max-w-2xl rounded-full"
      />
      <span className="block font-bold text-base text-black dark:text-white hover:underline cursor-pointer">
        {artistName}
      </span>
    </button>
  );
};

ArtistCard.defaultProps = {
  image: "",
  artistName: "",
  artistId: "",
};

ArtistCard.propTypes = {
  image: PropTypes.string,
  artistName: PropTypes.string,
  artistId: PropTypes.string,
};

export default ArtistCard;
