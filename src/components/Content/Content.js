import React from "react";
import { tabs } from "../../constants";
import useAppStore from "../../stores/useAppStore";
import NavBar from "./NavBar/NavBar";
import BrowseView from "../../Containers/BrowseView/BrowseView";
import CategoryView from "../../Containers/CategoryView/CategoryView";
import SubPlaylistView from "../../Containers/CategoryView/SubPlaylistView/SubPlayListView";
import PlaylistView from "../../Containers/ListView/PlaylistView";
import RecentlyPlayed from "../../Containers/RecentlyPlayed/RecentlyPlayed";

const currentTabSelector = (state) => state.currentTab;

const Content = () => {
  const currentTab = useAppStore(currentTabSelector);
  const {
    BROWSE,
    CATEGORIES,
    SUB_PLAYLIST_VIEW,
    PLAYLIST_LIST_VIEW,
    RECENTLY_PLAYED,
  } = tabs;
  return (
    <>
      <NavBar />
      <div className="py-6 px-6 h-full">
        {currentTab === BROWSE && <BrowseView />}
        {currentTab === CATEGORIES && <CategoryView />}
        {currentTab === SUB_PLAYLIST_VIEW && <SubPlaylistView />}
        {currentTab === PLAYLIST_LIST_VIEW && <PlaylistView />}
        {currentTab === RECENTLY_PLAYED && <RecentlyPlayed />}
      </div>
    </>
  );
};

export default Content;
