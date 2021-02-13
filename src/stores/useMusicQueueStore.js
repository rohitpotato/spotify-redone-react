import create from "zustand";

const useMusicQueueStore = create((set) => ({
  queue: [],
  setQueue: (queue) => set({ queue }),
  currentIndex: null,
  setCurrentIndex: (currentIndex) => set({ currentIndex }),
  addToQueue: (music) => set((state) => ({ ...state.queue, music })),
}));

export default useMusicQueueStore;
