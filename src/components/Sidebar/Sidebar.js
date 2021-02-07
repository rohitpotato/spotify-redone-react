import React from "react";
import "./Sidebar.css";
import HomeIcon from "../../icons/HomeIcon";
import BrowseIcon from "../../icons/BrowseIcon";
import Playlist from "./Playlist/Playlist";
// import PropTypes from "prop-types";

const mockPlaylist = [
  "Chill and Rap with Bhadwa",
  "Summer Mix",
  "Winter Mix",
  "Cool Playlist",
  "Some feelings radio",
  "yellow hearts radio",
  "Chill and Rap with Bhadwa",
  "Summer Mix",
  "Winter Mix",
  "Cool Playlist",
  "Some feelings radio",
  "yellow hearts radio",
  "Chill and Rap with Bhadwa",
  "Summer Mix",
  "Winter Mix",
  "Cool Playlist",
  "Some feelings radio",
  "yellow hearts radio",
  "Chill and Rap with Bhadwa",
  "Summer Mix",
  "Winter Mix",
  "Cool Playlist",
  "Some feelings radio",
  "yellow hearts radio",
  "Chill and Rap with Bhadwa",
  "Summer Mix",
  "Winter Mix",
  "Cool Playlist",
  "Some feelings radio",
  "yellow hearts radio",
];

const Sidebar = () => {
  return (
    <nav className="sidebar w-96 shadow">
      <div className="py-8 dark:text-white space-y-3">
        <button
          type="button"
          className="py-3 px-6 text-gray-500 hover:bg-gray-200 hover:text-gray-900 font-bold dark:text-gray-400 dark:hover:bg-white dark:hover:text-black w-full focus:outline-none transition rounded"
        >
          <div className="flex items-center gap-3">
            <HomeIcon />
            <span>Home</span>
          </div>
        </button>
        <button
          type="button"
          className="px-6 py-3 text-gray-500 hover:bg-gray-200 hover:text-gray-900 font-bold dark:text-gray-400 dark:hover:bg-white dark:hover:text-black w-full focus:outline-none transition rounded"
        >
          <div className="flex items-center gap-3">
            <BrowseIcon />
            <span>Browse</span>
          </div>
        </button>
        <div className="px-6 py-4 tracking-widest font-semibold text-black text-sm dark:text-white uppercase">
          <span className="">your library</span>
        </div>
        <button
          type="button"
          className="px-6 text-gray-500 hover:text-gray-900 font-bold text-sm dark:text-gray-400 dark:hover:text-white w-full focus:outline-none transition"
        >
          <div className="flex items-center">
            <span>Recenty Played</span>
          </div>
        </button>
        <button
          type="button"
          className="px-6 text-gray-500 hover:text-gray-900 font-bold text-sm dark:text-gray-400 dark:hover:text-white w-full focus:outline-none transition"
        >
          <div className="flex items-center">
            <span>Liked Songs</span>
          </div>
        </button>
        <button
          type="button"
          className="px-6 text-gray-500 hover:text-gray-900 font-bold text-sm dark:text-gray-400 dark:hover:text-white w-full focus:outline-none transition"
        >
          <div className="flex items-center">
            <span>Artists</span>
          </div>
        </button>
        <button
          type="button"
          className="px-6 text-gray-500 hover:text-gray-900 font-bold text-sm dark:text-gray-400 dark:hover:text-white w-full focus:outline-none transition"
        >
          <div className="flex items-center">
            <span>Albums</span>
          </div>
        </button>

        <div className="px-6 py-4 tracking-widest font-semibold text-black text-sm dark:text-white uppercase">
          <span className="">playlist</span>
        </div>
        <div className="px-6 overflow-y-scroll max-h-96">
          <Playlist list={mockPlaylist} />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
