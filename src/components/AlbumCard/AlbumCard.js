import React from "react";
import PropTypes from "prop-types";
import useAppStore from "../../stores/useAppStore";
import { tabs } from "../../constants";

const setAlbumInfoSelector = (state) => state.setAlbumInfo;
const setCurrentTabSelector = (state) => state.setCurrentTab;

const AlbumCard = ({ name, albumImage, albumId }) => {
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setAlbumInfo = useAppStore(setAlbumInfoSelector);

  const handleAlbumClick = () => {
    setCurrentTab(tabs.ALBUM);
    setAlbumInfo({ albumId });
  };

  return (
    <button
      type="submit"
      className="focus:outline-none"
      onClick={handleAlbumClick}
    >
      <img
        src={albumImage}
        alt="Artist Card"
        className="transform-gpu hover:scale-105 flex-shrink-0 hover:opacity-80 transition-transform duration-150 max-h-64 max-w-2xl rounded-full"
      />
      <span className="block font-bold text-base text-black dark:text-white hover:underline cursor-pointer">
        {name}
      </span>
    </button>
  );
};

AlbumCard.defaultProps = {
  name: "",
  albumImage: "",
  albumId: "",
};

AlbumCard.propTypes = {
  name: PropTypes.string,
  albumImage: PropTypes.string,
  albumId: PropTypes.string,
};

export default AlbumCard;
