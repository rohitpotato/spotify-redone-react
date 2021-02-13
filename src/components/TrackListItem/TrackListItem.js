import React from "react";
import PropTypes from "prop-types";
import useAudioStore from "../../stores/useAudioStore";
import useMusicQueueStore from "../../stores/useMusicQueueStore";
import transformQueue from "../../utils/queueUtils";
import PlayIcon from "../../icons/PlayIcon";
import { iconSize } from "../../constants";

const setAudioInfoSelector = (state) => state.setAudioInfo;
const setQueueSelector = (state) => state.setQueue;
const setCurrentIndexSelector = (state) => state.setCurrentIndex;
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
  const setCurrentIndex = useMusicQueueStore(setCurrentIndexSelector);
  const handlePlayClick = () => {
    setAudioInfo({ id, title, url, artist, image });
    setQueue(transformQueue(list));
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex flex-auto justify-between items-center p-4 dark:hover:bg-gray-500 hover:bg-gray-200 transition w-full">
        <div className="w-1/12">
          <PlayIcon onClick={handlePlayClick} size={iconSize} />
        </div>
        <button
          type="button"
          className="w-2/4 focus:outline-none cursor-pointer hover:underline"
        >
          <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold ">
            {title}
          </span>
        </button>
        {album && (
          <button
            type="button"
            className="w-2/4 focus:outline-none cursor-pointer hover:underline"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {album}
            </span>
          </button>
        )}
        {artist && (
          <button
            type="button"
            className="w-2/4 focus:outline-none cursor-pointer hover:underline"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {artist}
            </span>
          </button>
        )}
        {addedAt && (
          <button
            type="button"
            className="w-2/4 focus:outline-none cursor-pointer hover:underline"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {addedAt}
            </span>
          </button>
        )}
        {duration && (
          <button
            type="button"
            className="w-2/4 focus:outline-none cursor-pointer hover:underline"
          >
            <span className="flex dark:text-white text-black hover:dark:text-gray-300 text-sm font-semibold">
              {duration}
            </span>
          </button>
        )}
      </div>
      <div className="border-solid border">{}</div>
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
