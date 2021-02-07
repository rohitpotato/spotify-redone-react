import React from "react";
import useThemeStore from "../../stores/useThemeStore";
import { THEME_TYPES } from "../../constants/index";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";
import { ChevronLeft, ChevronRight } from "../../icons/Chevron";

const Content = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <nav className="content w-full sticky top-0">
      <div className="flex justify-between items-center">
        <div className="flex gap-6">
          <div>
            <ChevronLeft />
          </div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div className="flex">
          {theme === THEME_TYPES.THEME_DARK ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </nav>
  );
};

export default Content;
