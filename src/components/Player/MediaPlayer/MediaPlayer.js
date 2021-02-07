import React from "react";
import PropTypes from "prop-types";
import PauseIcon from "../../../icons/PauseIcon";
import { PreviousIcon, NextIcon } from "../../../icons/PlayerNavIcons";
import PlayIcon from "../../../icons/PlayIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
import { playbackOptions } from "../../../constants";
import useAudioStore from "../../../stores/useAudioStore";

const isPlayingSelector = (state) => state.isPlaying;

const MediaPlayer = ({ handlePlayback }) => {
  const isPlaying = useAudioStore(isPlayingSelector);

  return (
    <div className="flex flex-col w-full">
      <div className="flex space-x-6 items-center self-center">
        {/* <div>Shuffle</div> */}
        <div>
          <PreviousIcon />
        </div>
        <div>
          {!isPlaying ? (
            <PlayIcon onClick={() => handlePlayback(playbackOptions.PLAY)} />
          ) : (
            <PauseIcon onClick={() => handlePlayback(playbackOptions.PAUSE)} />
          )}
        </div>
        <div>
          <NextIcon />
        </div>
        {/* <div>Repeat</div> */}
      </div>
      <div className="">
        <ProgressBar />
      </div>
    </div>
  );
};

MediaPlayer.propTypes = {
  handlePlayback: PropTypes.func.isRequired,
};

export default React.memo(MediaPlayer);
