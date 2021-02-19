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
  noOfTracks,
  listType,
  owner,
  isFollowing,
  duration,
  isFollowable,
  followerCount,
  toggleFollow,
  isArtist,
  headingType,
}) => {
  const theme = useThemeStore(themeSelector);

  return (
    <div className="flex justify-between w-full min-w-max">
      <div className="flex items-center gap-4 item-title w-full">
        <div>
          <img src={image} alt="album_cover" className="h-80 w-80 rounded" />
        </div>
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-1 justify-end mt-16">
            <div className="flex space-x-2 items-center">
              <span className="uppercase tracking-widest text-sm dark:text-white text-gray-500 block">
                {listType}
              </span>
              {isArtist && (
                <span>
                  <CheckCircle />
                </span>
              )}
            </div>
            <h1
              className={`${
                headingType === "small" ? "text-5xl" : "text-9xl"
              } block dark:text-white text-gray-500 font-bold`}
            >
              {heading}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm dark:text-white text-gray-500">by </span>
              <span className="dark:text-white text-gray-500 font-bold text-base">
                {owner}
              </span>
              <span className="text-sm dark:text-white text-gray-500">
                {noOfTracks} songs
              </span>
              <span className="text-sm dark:text-white text-gray-500">
                {duration}
              </span>
            </div>
          </div>

          <div className="flex items-end space-x-4 align-bottom flex-1">
            <div className="">
              <button
                type="button"
                className="tracking-widest py-2 px-8 bg-blue-500 rounded-3xl uppercase text-center font-bold focus:outline-none hover:scale-110 transform-gpu transition-transform"
              >
                <span className="">pause</span>
              </button>
            </div>
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
        </div>
      </div>
      <div className="self-end flex justify-center flex-1">
        <span className="uppercase tracking-wider text-gray-500 dark:text-white text-sm font-semibold">
          Followers {followerCount}
        </span>
      </div>
    </div>
  );
};

Banner.defaultProps = {
  image: "",
  heading: "",
  noOfTracks: "",
  listType: "",
  owner: "",
  headingType: "small",
  duration: "10 hr 42 min",
  isFollowing: false,
  isFollowable: false,
  followerCount: 0,
  isArtist: false,
  toggleFollow: () => {},
};

Banner.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  noOfTracks: PropTypes.number,
  listType: PropTypes.string,
  owner: PropTypes.string,
  headingType: PropTypes.string,
  duration: PropTypes.string,
  isFollowing: PropTypes.bool,
  isFollowable: PropTypes.bool,
  followerCount: PropTypes.number,
  isArtist: PropTypes.bool,
  toggleFollow: PropTypes.func,
};

export default Banner;
