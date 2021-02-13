import React from "react";
import useThemeStore from "../../../stores/useThemeStore";
import { THEME_TYPES } from "../../../constants/index";
import SunIcon from "../../../icons/SunIcon";
import MoonIcon from "../../../icons/MoonIcon";
import SearchBar from "../../SearchBar/SearchBar";

const image = "https://i.redd.it/4naag2q0uee51.png";

const NavBar = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <nav className="content w-full sticky top-0 py-4 px-4 shadow-sm z-10 bg-white dark:bg-themeGray">
      <div className="flex sm:flex-col md:flex-row justify-between items-center">
        <div className="flex gap-6 items-center w-full justify-start">
          <div>
            <img
              src={image}
              className="rounded-full h-8 w-8"
              alt="profile display"
            />
          </div>
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
        <div className="flex w-full justify-end">
          {theme === THEME_TYPES.THEME_DARK ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
