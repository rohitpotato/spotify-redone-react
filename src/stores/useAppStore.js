import create from "zustand";
import { tabs } from "../constants";

const useAppStore = create((set) => ({
  currentTab: tabs.LIST_VIEW,
  setCurrentTab: (type) => set({ currentTab: type }),
  playlistInfo: null,
  setPlaylistInfo: (playlistInfo) => set({ playlistInfo }),
  categoryInfo: null,
  setCategoryInfo: (categoryInfo) => set({ categoryInfo }),
  isUpdating: false,
  setIsUpdating: () => set((state) => ({ isUpdating: !state.isUpdating })),
}));
export default useAppStore;
