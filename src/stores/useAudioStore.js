import create from "zustand";

const useAudioStore = create((set) => ({
  isPlaying: false,
  togglePlayback: () => set((state) => ({ isPlaying: !state.isPlaying })),
  timeElapsed: 0,
  setTimeElapsed: (time) => set({ timeElapsed: time }),
  duration: 0,
  setDuration: (duration) => set({ duration }),
}));

export default useAudioStore;
