import React from "react";
import "./Sidebar.css";
import SearchIcon from "../../icons/SearchIcon";
import BrowseIcon from "../../icons/BrowseIcon";
import CategoryIcon from "../../icons/CategoryIcon";
import Playlist from "./Playlist/Playlist";
import useAppStore from "../../stores/useAppStore";
import { tabs } from "../../constants";
import MenuIcon from "../../icons/MenuIcon";

const setCurrentTabSelector = (state) => state.setCurrentTab;
const isSidebarVisibleSelector = (state) => state.isSidebarVisible;
const setSidebarVisibleSelector = (state) => state.setSidebarVisible;

const Sidebar = () => {
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const isSidebarVisible = useAppStore(isSidebarVisibleSelector);
  const setSidebarVisible = useAppStore(setSidebarVisibleSelector);

  const handleOptionClick = (view) => {
    setCurrentTab(view);
    setSidebarVisible();
  };

  return (
    <nav
      className={`sidebar w-96 shadow px-6 h-full sm:w-screen md:w-72 md:block  ${
        isSidebarVisible ? "sm:block w-screen" : "hidden"
      }`}
      id="sidebar"
    >
      <div className="pt-8 pb-2 md:hidden block">
        <MenuIcon onClick={() => setSidebarVisible()} />
      </div>
      <div className="py-8 dark:text-white space-y-3">
        {[
          { name: "Browse", Component: BrowseIcon, onClickView: tabs.BROWSE },
          {
            name: "Categories",
            Component: CategoryIcon,
            onClickView: tabs.CATEGORIES,
          },
          {
            name: "SEARCH",
            Component: SearchIcon,
            onClickView: tabs.SEARCH_VIEW,
          },
        ].map(({ name, Component, onClickView }) => {
          return (
            <button
              key={name}
              type="button"
              onClick={() => handleOptionClick(onClickView)}
              className="py-3 text-gray-500 uppercase hover:bg-gray-200 hover:text-gray-900 font-bold dark:text-gray-400 dark:hover:bg-white dark:hover:text-black w-full focus:outline-none transition rounded"
            >
              <div className="flex items-center gap-3">
                <Component />
                <span>{name}</span>
              </div>
            </button>
          );
        })}

        <div className="py-4 tracking-widest font-semibold text-black text-sm dark:text-white uppercase">
          <span className="">your library</span>
        </div>
        {[
          { name: "Top Songs", onClick: tabs.TOP_TRACKS },
          { name: "Artists", onClick: tabs.ARTIST_LIST },
          { name: "Albums", onClick: tabs.ALBUM_LIST },
          { name: "Recently Played", onClick: tabs.RECENTLY_PLAYED },
        ].map((item) => (
          <button
            key={item.name}
            onClick={() => handleOptionClick(item.onClick)}
            type="button"
            className="text-gray-500 hover:text-gray-900 font-bold text-sm dark:text-gray-400 dark:hover:text-white w-full focus:outline-none transition"
          >
            <div className="flex items-center">
              <span>{item.name}</span>
            </div>
          </button>
        ))}
        <div className="py-2 tracking-widest font-semibold text-black text-sm dark:text-white uppercase">
          <span className="">playlist</span>
        </div>
        <div className="overflow-y-scroll max-h-full w-full flex justify-start items-start overflow-x-hidden">
          <Playlist />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
