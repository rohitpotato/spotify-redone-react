import React from "react";
import PropTypes from "prop-types";
import useAudioStore from "../../stores/useAudioStore";
import useMusicQueueStore from "../../stores/useMusicQueueStore";
import useAppStore from "../../stores/useAppStore";
import transformQueue from "../../utils/queueUtils";
import PlayIcon from "../../icons/PlayIcon";
import { iconSize, tabs } from "../../constants";
import "./TrackListItem.css";

const setAudioInfoSelector = (state) => state.setAudioInfo;
const setQueueSelector = (state) => state.setQueue;
const setCurrentIndexSelector = (state) => state.setCurrentIndex;
const setCurrentTabSelector = (state) => state.setCurrentTab;
const setArtistInfoSelector = (state) => state.setArtistInfo;
const TrackListItem = ({
  id,
  index,
  title,
  album,
  artist,
  addedAt,
  duration,
  url,
  image,
  artistId,
  albumId,
  list,
}) => {
  const setAudioInfo = useAudioStore(setAudioInfoSelector);
  const setQueue = useMusicQueueStore(setQueueSelector);
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setArtistInfo = useAppStore(setArtistInfoSelector);
  const setCurrentIndex = useMusicQueueStore(setCurrentIndexSelector);

  const handlePlayClick = () => {
    setAudioInfo({ id, title, url, artist, image });
    setQueue(transformQueue(list));
    setCurrentIndex(index);
  };

  const handleArtistClick = () => {
    setCurrentTab(tabs.ARTIST);
    setArtistInfo({ artistId });
  };

  return (
    <>
      <div className="flex border-b-2 border-gray-400 space-x-3 dark:border-gray-600 border-opacity-2 20 justify-between items-center p-4 dark:hover:bg-gray-500 hover:bg-gray-200 transition w-full">
        <div className="mx-2">
          <PlayIcon onClick={handlePlayClick} size={iconSize} />
        </div>
        <div className="focus:outline-none flex-shrink-0 item-title">
          <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold ">
            {title}
          </span>
        </div>
        {album && (
          <button
            type="button"
            className="focus:outline-none cursor-pointer hover:underline flex-shrink-0 item-title"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {album}
            </span>
          </button>
        )}
        {artist && (
          <button
            onClick={handleArtistClick}
            type="button"
            className="focus:outline-none cursor-pointer hover:underline flex-shrink-0 item-title"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {artist}
            </span>
          </button>
        )}
        {addedAt && (
          <button
            type="button"
            className="focus:outline-none cursor-pointer hover:underline flex-1 flex-shrink-0"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {addedAt}
            </span>
          </button>
        )}
        {duration && (
          <button
            type="button"
            className="focus:outline-none cursor-pointer hover:underline flex-1 flex-shrink-0"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {duration}
            </span>
          </button>
        )}
      </div>
    </>
  );
};

TrackListItem.defaultProps = {
  id: "",
  index: null,
  title: "",
  image: "",
  album: null,
  artist: null,
  addedAt: null,
  duration: null,
  url: null,
  artistId: null,
  albumId: null,
  list: [],
};

TrackListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  album: PropTypes.string,
  artist: PropTypes.string,
  addedAt: PropTypes.string,
  duration: PropTypes.number,
  url: PropTypes.string,
  artistId: PropTypes.string,
  albumId: PropTypes.string,
  list: PropTypes.array,
  index: PropTypes.number,
};

export default TrackListItem;
