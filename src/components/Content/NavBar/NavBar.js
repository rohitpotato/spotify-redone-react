import React from "react";
import useThemeStore from "../../../stores/useThemeStore";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryKeys, THEME_TYPES } from "../../../constants/index";
import SunIcon from "../../../icons/SunIcon";
import MoonIcon from "../../../icons/MoonIcon";
import SearchBar from "../../SearchBar/SearchBar";

const NavBar = () => {
  const theme = useThemeStore((state) => state.theme);
  const userInfoQuery = useQueryHook({
    key: queryKeys.USER_PROFILE,
    url: "/me",
  });

  const renderProfileInfo = () => {
    if (userInfoQuery.isLoading) {
      return null;
    }

    if (userInfoQuery.isError) {
      return null;
    }

    if (userInfoQuery.isSuccess) {
      const image = userInfoQuery.data?.data?.images?.[0]?.url;
      return (
        <div>
          <img
            src={image}
            className="rounded-full h-8 w-8"
            alt="profile display"
          />
        </div>
      );
    }
    return null;
  };

  return (
    <nav className="content w-full sticky top-0 py-4 px-4 shadow-sm z-10 bg-white dark:bg-themeGray">
      <div className="flex sm:flex-col md:flex-row justify-between items-center">
        <div className="flex gap-6 items-center w-full justify-start">
          {renderProfileInfo()}
        </div>
        <div className="flex w-full justify-end">
          {theme === THEME_TYPES.THEME_DARK ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
