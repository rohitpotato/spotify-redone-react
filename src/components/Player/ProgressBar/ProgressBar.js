import React, { useEffect, useRef, useCallback, useState } from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css";
import useDimensions from "../../../hooks/useDimensions";
import useAudioStore from "../../../stores/useAudioStore";

const timeElapsedSelector = (state) => state.timeElapsed;
const durationSelector = (state) => state.duration;

const ProgressBar = () => {
  const progressBarRef = useRef(null);
  const timeElapsed = useAudioStore(timeElapsedSelector);
  const duration = useAudioStore(durationSelector);
  const { width: progressBarWidth } = useDimensions(progressBarRef);

  const calculateProgressWidth = () => {
    const progressSize = (timeElapsed / duration) * progressBarWidth;
    return (progressSize / progressBarWidth) * 100 || 0;
  };

  return (
    <div
      ref={progressBarRef}
      role="presentation"
      //   onClick={handleAudioSeek}
      className="relative progress-bar rounded bg-gray-600 dark:bg-white"
    >
      <div
        style={{ width: `${calculateProgressWidth()}%` }}
        className="absolute inset-0 bg-blue-500 dark:bg-red-600 max-w-full hover:bg-red-600 dark:hover:bg-blue-500"
      />
    </div>
  );
};

export default ProgressBar;
