import React from "react";
import PropTypes from "prop-types";
import useAudioStore from "../../stores/useAudioStore";
import useMusicQueueStore from "../../stores/useMusicQueueStore";
import { transforArtistQueue } from "../../utils/queueUtils";
import PlayIcon from "../../icons/PlayIcon";

const setAudioInfoSelector = (state) => state.setAudioInfo;
const setQueueSelector = (state) => state.setQueue;
const setCurrentIndexSelector = (state) => state.setCurrentIndex;

const ArtistTrackList = ({
  image,
  index,
  name,

  previewUrl,
  id,
  artistInfo,
  list,
  albumName,
  albumId,
}) => {
  const setAudioInfo = useAudioStore(setAudioInfoSelector);
  const setQueue = useMusicQueueStore(setQueueSelector);
  const setCurrentIndex = useMusicQueueStore(setCurrentIndexSelector);

  const handlePlayClick = () => {
    setAudioInfo({
      id,
      title: name,
      url: previewUrl,
      artist: artistInfo,
      image,
    });
    setQueue(transforArtistQueue(list));
    setCurrentIndex(index);
  };

  return (
    <div className="flex sapce-between border-b-2 border-gray-400 dark:border-gray-600 border-opacity-2 20 space-x-4 py-2 items-center focus:outline-none">
      <button
        onClick={handlePlayClick}
        type="button"
        className="focus:outline-none"
      >
        <PlayIcon size="h-8 w-8" />
      </button>
      <div className="flex-shrink-0">
        <img src={image} alt="artist_image" className="h-10 w-10" />
      </div>
      <div className="flex-shrink-0 flex-1">
        <span className="font-semibold  text-base dark:text-white tracking-wide">
          {name}
        </span>
      </div>
      <div className="flex-shrink-0 flex-1 dark:text-white tracking-wide text-sm hover:underline">
        <span>{albumName}</span>
      </div>
    </div>
  );
};

ArtistTrackList.defaultProps = {
  image: "",
  index: undefined,
  name: undefined,
  previewUrl: undefined,
  id: undefined,
  artistInfo: undefined,
  list: [],
  albumName: undefined,
  albumId: undefined,
};

ArtistTrackList.propTypes = {
  image: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  previewUrl: PropTypes.string,
  id: PropTypes.string,
  artistInfo: PropTypes.string,
  list: PropTypes.array,
  albumName: PropTypes.string,
  albumId: PropTypes.string,
};

export default ArtistTrackList;
