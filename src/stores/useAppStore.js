import create from "zustand";
import { tabs } from "../constants";

const useAppStore = create((set) => ({
  currentTab: tabs.BROWSE,
  setCurrentTab: (type) => set({ currentTab: type }),
  playlistInfo: null,
  setPlaylistInfo: (playlistInfo) => set({ playlistInfo }),
  categoryInfo: null,
  setCategoryInfo: (categoryInfo) => set({ categoryInfo }),
  artistInfo: null,
  setArtistInfo: (artistInfo) => set({ artistInfo }),
  albumInfo: null,
  setAlbumInfo: (albumInfo) => set({ albumInfo }),
  isSidebarVisible: false,
  setSidebarVisible: () =>
    set((state) => ({ isSidebarVisible: !state.isSidebarVisible })),
}));
export default useAppStore;
