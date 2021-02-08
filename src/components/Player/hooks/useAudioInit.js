/* eslint-disable no-param-reassign */
import { useEffect, useRef } from "react";
import { localStorageKeys } from "../../../constants";
import useAudioStore from "../../../stores/useAudioStore";
import useFirstRender from "../../../hooks/useFirstRender";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../../utils/localStorageUtils";

const togglePlaybackSelector = (state) => state.togglePlayback;
const setDurationSelector = (state) => state.setDuration;
const setTimeElapsedSelector = (state) => state.setTimeElapsed;
const setVolumeSelector = (state) => state.setVolume;
const volumeSelector = (state) => state.volume;

export default function useAudioInit({ audioRef, url }) {
  const isFirstRender = useFirstRender();
  const togglePlayback = useAudioStore(togglePlaybackSelector);
  const setDuration = useAudioStore(setDurationSelector);
  const setTimeElapsed = useAudioStore(setTimeElapsedSelector);
  const volume = useAudioStore(volumeSelector);
  const setVolume = useAudioStore(setVolumeSelector);

  useEffect(() => {
    const volumeFromLocalStorage =
      getFromLocalStorage(localStorageKeys.LAST_SAVED_VOLUME, 1) || 0;
    audioRef.current.volume = volumeFromLocalStorage;
    setVolume(volumeFromLocalStorage);
  }, [audioRef, setVolume]);

  useEffect(() => {
    if (!isFirstRender) {
      audioRef.current.volume = volume;
      setVolume(volume);
      setToLocalStorage(localStorageKeys.LAST_SAVED_VOLUME, volume);
    }
  }, [volume, audioRef, setVolume, isFirstRender]);

  useEffect(() => {
    audioRef.current.src = url;
    // audioRef.current.play();
    // setIsPlaying(true);
  }, [audioRef, url, isFirstRender]);

  useEffect(() => {
    const ref = audioRef.current;
    const handleDurationChange = (event) => {
      setDuration(event.srcElement.duration);
    };
    ref.addEventListener("durationchange", handleDurationChange);
    return () => {
      ref.removeEventListener("durationchange", handleDurationChange);
    };
  });

  useEffect(() => {
    const ref = audioRef.current;
    const updateProgress = (event) => {
      const { currentTime } = event.srcElement;
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
