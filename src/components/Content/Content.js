import React from "react";
import { tabs } from "../../constants";
import useAppStore from "../../stores/useAppStore";
import NavBar from "./NavBar/NavBar";
import BrowseView from "../../Containers/BrowseView/BrowseView";
import CategoryView from "../../Containers/CategoryView/CategoryView";
import SubPlaylistView from "../../Containers/CategoryView/SubPlaylistView/SubPlayListView";
import ListView from "../../Containers/ListView/ListView";

const currentTabSelector = (state) => state.currentTab;

const Content = () => {
  const currentTab = useAppStore(currentTabSelector);
  const { BROWSE, CATEGORIES, SUB_PLAYLIST_VIEW, LIST_VIEW } = tabs;
  return (
    <>
      <NavBar />
      <div className="py-6 px-6">
        {currentTab === BROWSE && <BrowseView />}
        {currentTab === CATEGORIES && <CategoryView />}
        {currentTab === SUB_PLAYLIST_VIEW && <SubPlaylistView />}
        {currentTab === LIST_VIEW && <ListView />}
      </div>
    </>
  );
};

export default Content;
