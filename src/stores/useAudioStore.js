import create from "zustand";
import { persist } from "zustand/middleware";
import { localStorageKeys } from "../constants";

const useAudioStore = create(
  persist(
    (set) => ({
      isPlaying: false,
      togglePlayback: (bool) => set({ isPlaying: bool }),
      timeElapsed: 0,
      setTimeElapsed: (time) => set({ timeElapsed: time }),
      duration: 0,
      setDuration: (duration) => set({ duration }),
      volume: 0.5,
      setVolume: (volume) => set({ volume }),
      audioInfo: null,
      setAudioInfo: (audioInfo) => set({ audioInfo }),
    }),
    {
      name: localStorageKeys.LAST_SAVED_VOLUME,
      whitelist: ["volume"],
    }
  )
);

export default useAudioStore;
