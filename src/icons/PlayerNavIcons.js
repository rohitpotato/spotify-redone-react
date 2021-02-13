import React from "react";
import useMusicQueueStore from "../stores/useMusicQueueStore";
import useAudioStore from "../stores/useAudioStore";
import { extractTrackData } from "../utils/trackUtils";
import { iconSize } from "../constants";

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @return {HTMLInputElement}
 */

const setAudioInfoSelector = (state) => state.setAudioInfo;
const queueSelector = (state) => state.queue;
const currentAudioIndexSelector = (state) => state.currentIndex;
const setCurrentIndexSelector = (state) => state.setCurrentIndex;

const PreviousIcon = () => {
  const setAudioInfo = useAudioStore(setAudioInfoSelector);
  const queue = useMusicQueueStore(queueSelector);
  const currentAudioIndex = useMusicQueueStore(currentAudioIndexSelector);
  const setCurrentIndex = useMusicQueueStore(setCurrentIndexSelector);

  const { sortOrder, collection } = queue;
  const previousIndex = currentAudioIndex - 1;
  const isPrevious = sortOrder?.[previousIndex];

  const handlePreviousClick = () => {
    if (isPrevious) {
      setCurrentIndex(previousIndex);
      const previousAudio = collection[sortOrder?.[previousIndex]];
      const {
        id,
        name: title,
        previewUrl: url,
        artistName: artist,
        musicImage: image,
      } = extractTrackData(previousAudio);
      setAudioInfo({ id, title, url, artist, image });
    }
  };

  return (
    <button
      type="button"
      disabled={!isPrevious}
      className="focus:outline-none"
      onClick={handlePreviousClick}
    >
      <svg
        className={`${iconSize} dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

/**
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props
 * @return {HTMLInputElement}
 */

const NextIcon = () => {
  const setAudioInfo = useAudioStore(setAudioInfoSelector);
  const queue = useMusicQueueStore(queueSelector);
  const currentAudioIndex = useMusicQueueStore(currentAudioIndexSelector);
  const setCurrentIndex = useMusicQueueStore(setCurrentIndexSelector);

  const { sortOrder, collection } = queue;
  const nextIndex = currentAudioIndex + 1;
  const isNext = sortOrder?.[nextIndex];

  const handleNextClick = () => {
    if (isNext) {
      setCurrentIndex(nextIndex);
      const nextAudio = collection[sortOrder?.[nextIndex]];
      const {
        id,
        name: title,
        previewUrl: url,
        artistName: artist,
        musicImage: image,
      } = extractTrackData(nextAudio);
      setAudioInfo({ id, title, url, artist, image });
    }
  };

  return (
    <button
      disabled={!isNext}
      type="button"
      className="focus:outline-none"
      onClick={handleNextClick}
    >
      <svg
        className={`${iconSize} dark:text-white`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export { PreviousIcon, NextIcon };
