/* eslint-disable no-param-reassign */
import { useEffect } from "react";
import useAudioStore from "../../../stores/useAudioStore";
import useFirstRender from "../../../hooks/useFirstRender";
import useMusicQueueStore from "../../../stores/useMusicQueueStore";
import { extractTrackData } from "../../../utils/trackUtils";

const togglePlaybackSelector = (state) => state.togglePlayback;
const isPlayingSelector = (state) => state.isPlaying;
const setDurationSelector = (state) => state.setDuration;
const setTimeElapsedSelector = (state) => state.setTimeElapsed;
const volumeSelector = (state) => state.volume;
const audioInfoSelector = (state) => state.audioInfo;
const setAudioInfoSelector = (state) => state.setAudioInfo;
const queueSelector = (state) => state.queue;
const currentAudioIndexSelector = (state) => state.currentIndex;
const setCurrentIndexSelector = (state) => state.setCurrentIndex;

export default function useAudioInit({ audioRef }) {
  const isFirstRender = useFirstRender();
  const isPlaying = useAudioStore(isPlayingSelector);
  const togglePlayback = useAudioStore(togglePlaybackSelector);
  const setDuration = useAudioStore(setDurationSelector);
  const setTimeElapsed = useAudioStore(setTimeElapsedSelector);
  const volume = useAudioStore(volumeSelector);
  const audioInfo = useAudioStore(audioInfoSelector);
  const setAudioInfo = useAudioStore(setAudioInfoSelector);
  const queue = useMusicQueueStore(queueSelector);
  const currentAudioIndex = useMusicQueueStore(currentAudioIndexSelector);
  const setCurrentIndex = useMusicQueueStore(setCurrentIndexSelector);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [audioRef, volume]);

  useEffect(() => {
    if (audioInfo?.url) {
      audioRef.current.src = audioInfo.url;
      audioRef.current.play();
      togglePlayback(true);
    }
  }, [audioRef, audioInfo, isFirstRender, togglePlayback]);

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
      togglePlayback(false);
      setTimeElapsed(0);
      const { sortOrder, collection } = queue;
      const newIndex = currentAudioIndex + 1;
      if (newIndex < sortOrder.length) {
        const newAudio = collection[sortOrder[newIndex]];
        setCurrentIndex(newIndex);
        const {
          id,
          name: title,
          previewUrl: url,
          artistName: artist,
          musicImage: image,
        } = extractTrackData(newAudio);
        setAudioInfo({ id, title, url, artist, image });
      }
    };
    ref.addEventListener("ended", handleAudioEnd);
    return () => {
      ref.removeEventListener("ended", handleAudioEnd);
    };
  }, [
    togglePlayback,
    setTimeElapsed,
    audioRef,
    currentAudioIndex,
    queue,
    setAudioInfo,
    setCurrentIndex,
  ]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.keyCode === 32) {
        if (isPlaying === true) {
          togglePlayback(false);
          audioRef.current.pause();
        } else {
          togglePlayback(true);
          audioRef.current.play();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isPlaying, togglePlayback, audioRef]);
}
