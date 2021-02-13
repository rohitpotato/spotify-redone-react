import React from "react";
import useThemeStore from "../../stores/useThemeStore";
import { HeartIconActive } from "../../icons/HeartIcon";
import { THEME_TYPES } from "../../constants/index";

const image = "https://i.redd.it/4naag2q0uee51.png";
const themeSelector = (state) => state.theme;

const ListView = () => {
  const theme = useThemeStore(themeSelector);
  return (
    <div className="flex justify-between min-w-max">
      <div className="relative flex items-center gap-4">
        <div>
          <img src={image} alt="album_cover" className="h-80 w-80 rounded" />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-1 justify-end mt-16">
            <span className="uppercase tracking-widest text-sm dark:text-white text-gray-500 block">
              Playlist
            </span>
            <h1 className="text-4xl block dark:text-white text-gray-500 font-bold">
              Confortably Numb
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm dark:text-white text-gray-500">
                Created by{" "}
                <bold className="font-bold text-base">mex2mafia</bold>
              </span>
              <span className="text-sm dark:text-white text-gray-500">
                137 songs
              </span>
              <span className="text-sm dark:text-white text-gray-500">
                10 hr 42 min
              </span>
            </div>
          </div>

          <div className="flex items-end space-x-2 align-bottom flex-1">
            <div className="">
              <button
                type="button"
                className="tracking-widest py-2 px-8 bg-blue-500 dark:bg-red-500 rounded-3xl uppercase text-center font-bold focus:outline-none hover:scale-110 transform-gpu transition-transform"
              >
                <span className="">pause</span>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex border border-black dark:border-white h-10 w-10 rounded-full items-center justify-center p-4 hover:scale-110 transform-gpu transition-transform duration-150"
              >
                <HeartIconActive
                  fillColor={`${
                    theme === THEME_TYPES.THEME_DARK ? "white" : "black"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-end">
        <span className="uppercase tracking-wider text-gray-500 dark:text-white text-sm font-semibold">
          Followers <bold>5112</bold>
        </span>
      </div>
    </div>
  );
};

export default ListView;
