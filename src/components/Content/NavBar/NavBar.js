import React from "react";
import useThemeStore from "../../../stores/useThemeStore";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryKeys, THEME_TYPES } from "../../../constants/index";
import MenuIcon from "../../../icons/MenuIcon";
import SunIcon from "../../../icons/SunIcon";
import MoonIcon from "../../../icons/MoonIcon";
import useAppStore from "../../../stores/useAppStore";
import useAuthStore from "../../../stores/useAuthStore";
import GithubIcon from "../../../icons/GithubIcon";

const NavBar = () => {
  const theme = useThemeStore((state) => state.theme);
  const setSidebarVisible = useAppStore((state) => state.setSidebarVisible);
  const isSidebarVisible = useAppStore((state) => state.isSidebarVisible);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

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
        <img
          src={image}
          className="rounded-full h-8 w-8"
          alt="profile display"
        />
      );
    }
    return null;
  };

  const handleMenuClick = () => {
    setSidebarVisible();
  };

  return (
    <nav
      className={`content w-full sticky top-0 p-4 shadow-sm bg-white dark:bg-themeGray overflow-hidden dark:border-gray-800 border-b-2 ${
        isAuthenticated ? "z-10" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`sm:flex md:hidden flex-1 ${
            isSidebarVisible ? "hidden" : "block"
          }`}
        >
          <MenuIcon onClick={handleMenuClick} />
        </div>
        <div className="flex items-center flex-1 justify-end space-x-4">
          <GithubIcon />
          {renderProfileInfo()}
          <div className="flex">
            {theme === THEME_TYPES.THEME_DARK ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
