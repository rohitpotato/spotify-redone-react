import React, { useCallback, useRef } from "react";
import { playbackOptions } from "../../constants";
import MediaPlayer from "./MediaPlayer/MediaPlayer";
import "./Player.css";
import SongInfo from "./SongInfo/SongInfo";
import VolumeControl from "./VolumeControl/VolumeControl";
import useAudioStore from "../../stores/useAudioStore";
import useAudioInit from "./hooks/useAudioInit";

const togglePlaybackSelector = (state) => state.togglePlayback;

const Player = () => {
  const audioRef = useRef(null);
  const togglePlayback = useAudioStore(togglePlaybackSelector);
  useAudioInit({ audioRef });

  const handlePlayback = useCallback(
    (action) => {
      if (action === playbackOptions.PLAY) {
        audioRef.current.play();
        togglePlayback(true);
      } else if (action === playbackOptions.PAUSE) {
        audioRef.current.pause();
        togglePlayback(false);
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        togglePlayback();
      }
    },
    [togglePlayback]
  );

  return (
    <footer className="player fixed bottom-0 w-full shadow-2xl z-100">
      <audio ref={audioRef} />
      <div className="flex justify-between space-x-4 h-full px-8">
        <div className="self-center w-1/6 min-w-min">
          <SongInfo />
        </div>
        <div className="flex justify-center self-center w-4/6 min-w-min">
          <MediaPlayer handlePlayback={handlePlayback} />
        </div>
        <div className="self-center w-1/6 min-w-min flex justify-center">
          <VolumeControl />
        </div>
      </div>
    </footer>
  );
};

export default Player;
