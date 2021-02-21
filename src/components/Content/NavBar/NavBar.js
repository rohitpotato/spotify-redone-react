import React from "react";
import useThemeStore from "../../../stores/useThemeStore";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryKeys, THEME_TYPES } from "../../../constants/index";
import MenuIcon from "../../../icons/MenuIcon";
import SunIcon from "../../../icons/SunIcon";
import MoonIcon from "../../../icons/MoonIcon";
import useAppStore from "../../../stores/useAppStore";

const NavBar = () => {
  const theme = useThemeStore((state) => state.theme);
  const setSidebarVisible = useAppStore((state) => state.setSidebarVisible);
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
    <nav className="content w-full sticky top-0 p-4 shadow-sm z-10 bg-white dark:bg-themeGray overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="sm:flex md:hidden flex-1">
          <MenuIcon onClick={handleMenuClick} />
        </div>
        <div className="flex items-center flex-1 justify-end space-x-4">
          {renderProfileInfo()}
          <div>
            {theme === THEME_TYPES.THEME_DARK ? <SunIcon /> : <MoonIcon />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
