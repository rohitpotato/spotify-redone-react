import React from "react";
import { HeartIcon, HeartIconActive } from "../../../icons/HeartIcon";
import useAudioStore from "../../../stores/useAudioStore";

const audioInfoSelector = (state) => state.audioInfo;
const SongInfo = () => {
  const audioInfo = useAudioStore(audioInfoSelector);
  const { title, artist, image } = audioInfo || {};
  const liked = true;

  return (
    <div className="flex space-x-4 items-center">
      {image && (
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={image} alt="song_cover" />
        </div>
      )}
      <div>
        {title && (
          <span className="block text-base font-semibold dark:text-white flex-shrink-0">
            {title}
          </span>
        )}
        {artist && (
          <span className="block text-sm dark:text-white">{artist}</span>
        )}
      </div>
      <div>{liked ? <HeartIconActive /> : <HeartIcon />}</div>
    </div>
  );
};

export default SongInfo;
