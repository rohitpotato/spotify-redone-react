import React from "react";
import "./Sidebar.css";
import HomeIcon from "../../icons/HomeIcon";
import BrowseIcon from "../../icons/BrowseIcon";
import CategoryIcon from "../../icons/CategoryIcon";
import Playlist from "./Playlist/Playlist";
import useAppStore from "../../stores/useAppStore";
import { tabs } from "../../constants";

const setCurrentTabSelector = (state) => state.setCurrentTab;
const Sidebar = () => {
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  return (
    <nav className="sidebar w-96 shadow px-6">
      <div className="py-8 dark:text-white space-y-3">
        {[
          { name: "HOME", Component: HomeIcon },
          { name: "Browse", Component: BrowseIcon, onClickView: tabs.BROWSE },
          {
            name: "Categories",
            Component: CategoryIcon,
            onClickView: tabs.CATEGORIES,
          },
        ].map(({ name, Component, onClickView }) => {
          return (
            <button
              key={name}
              type="button"
              onClick={() => setCurrentTab(onClickView)}
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
          { name: "Liked Songs" },
          { name: "Artists" },
          { name: "Albums" },
          { name: "Recently Played" },
        ].map((item) => (
          <button
            key={item.name}
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
