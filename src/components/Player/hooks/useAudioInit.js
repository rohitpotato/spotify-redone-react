import { useEffect, useRef } from "react";
import useAudioStore from "../../../stores/useAudioStore";

const togglePlaybackSelector = (state) => state.togglePlayback;
const setDurationSelector = (state) => state.setDuration;
const setTimeElapsedSelector = (state) => state.setTimeElapsed;

export default function useAudioInit({ audioRef, url }) {
  const writtenToStore = useRef(false);
  const togglePlayback = useAudioStore(togglePlaybackSelector);
  const setDuration = useAudioStore(setDurationSelector);
  const setTimeElapsed = useAudioStore(setTimeElapsedSelector);

  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    audioRef.current.src = url;
    // set writtenToStore back to true when changing song
    writtenToStore.current = true;
    // audioRef.current.play();
    // setIsPlaying(true);
  }, [audioRef, url]);

  useEffect(() => {
    const ref = audioRef.current;
    const updateProgress = (event) => {
      const { duration, currentTime } = event.srcElement;
      if (!writtenToStore.current) {
        setDuration(duration);
        writtenToStore.current = true;
      }
      setTimeElapsed(currentTime);
    };
    ref.addEventListener("timeupdate", updateProgress);
    return () => {
      ref.removeEventListener("timeupdate", updateProgress);
    };
  }, [setDuration, setTimeElapsed, audioRef]);

  useEffect(() => {
    const ref = audioRef.current;
    const handleAudioEnd = () => {
      togglePlayback();
      setTimeElapsed(0);
    };
    ref.addEventListener("ended", handleAudioEnd);
    return () => {
      ref.removeEventListener("ended", handleAudioEnd);
    };
  }, [togglePlayback, setTimeElapsed, audioRef]);
}
