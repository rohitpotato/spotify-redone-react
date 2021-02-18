import React from "react";
import PropTypes from "prop-types";
import useAppStore from "../../stores/useAppStore";
import { tabs } from "../../constants";

const setAlbumInfoSelector = (state) => state.setAlbumInfo;
const setCurrentTabSelector = (state) => state.setCurrentTab;

const ArtistAlbumCard = ({ name, albumImage, albumId, releaseDate }) => {
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setAlbumInfo = useAppStore(setAlbumInfoSelector);

  const handleAlbumClick = () => {
    setCurrentTab(tabs.ALBUM);
    setAlbumInfo({ albumId });
  };

  return (
    <button
      onClick={handleAlbumClick}
      type="button"
      className="flex space-x-3 items-center hover:scale-110 transform-gpu transition-transform duration-200 focus:outline-none text-left"
    >
      <div>
        <img
          className="h-12 w-12 rounded-md"
          src={albumImage}
          alt="album_image"
        />
      </div>
      <div className="space-y-1">
        <span className="dark:text-white font-semibold block">{name}</span>
        <span className="dark:text-white block text-sm block">
          {releaseDate}
        </span>
      </div>
    </button>
  );
};

ArtistAlbumCard.defaultProps = {
  name: "",
  albumImage: "",
  albumId: "",
  releaseDate: "",
};

ArtistAlbumCard.propTypes = {
  name: PropTypes.string,
  albumImage: PropTypes.string,
  albumId: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default ArtistAlbumCard;
