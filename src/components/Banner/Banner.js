import React from "react";
import PropTypes from "prop-types";
import useThemeStore from "../../stores/useThemeStore";
import { HeartIcon, HeartIconActive } from "../../icons/HeartIcon";
import CheckCircle from "../../icons/CheckCircle";
import { THEME_TYPES } from "../../constants";

const themeSelector = (state) => state.theme;

const Banner = ({
  image,
  heading,
  listType,
  isFollowing,
  isFollowable,
  followerCount,
  toggleFollow,
  isArtist,
  headingType,
}) => {
  const theme = useThemeStore(themeSelector);

  return (
    <div className="flex justify-between w-full py-8">
      <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4 item-title w-min">
        <div className="flex-shrink-0">
          <img
            src={image}
            alt="album_cover"
            className="lg:h-80 lg:w-80 md:w-64 md:h-64 h-56 w-56 object-cover rounded"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-end lg:py-16 py-4 space-y-3">
            <div className="flex space-x-3 items-center">
              <span className="uppercase tracking-widest text-sm dark:text-white text-gray-500 block">
                {listType}
              </span>
              {isArtist && (
                <span>
                  <CheckCircle />
                </span>
              )}
              {isFollowable && (
                <div>
                  <div
                    type="button"
                    className="flex border focus:outline-none border-black dark:border-white h-10 w-10 rounded-full items-center justify-center p-4 hover:scale-110 transform-gpu transition-transform duration-150"
                  >
                    {isFollowing ? (
                      <HeartIconActive onClick={toggleFollow} />
                    ) : (
                      <HeartIcon
                        onClick={toggleFollow}
                        fillColor={
                          theme === THEME_TYPES.THEME_DARK ? "white" : "black"
                        }
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
            <h1
              className={`${
                headingType === "small"
                  ? "lg:text-5xl text-4xl"
                  : "lg:text-9xl text-5xl"
              } block dark:text-white text-gray-500 font-bold`}
            >
              {heading}
            </h1>
            <span className="uppercase tracking-wider text-gray-500 dark:text-white text-xs font-semibold">
              Followers {followerCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  image: "",
  heading: "",
  listType: "",
  headingType: "small",
  isFollowing: false,
  isFollowable: false,
  followerCount: 0,
  isArtist: false,
  toggleFollow: () => {},
};

Banner.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  listType: PropTypes.string,
  headingType: PropTypes.string,
  isFollowing: PropTypes.bool,
  isFollowable: PropTypes.bool,
  followerCount: PropTypes.number,
  isArtist: PropTypes.bool,
  toggleFollow: PropTypes.func,
};

export default Banner;
