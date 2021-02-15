import React from "react";
import useAppStore from "../../../stores/useAppStore";
import useQueryHook from "../../../hooks/useQueryHook";
import useThemeStore from "../../../stores/useThemeStore";
import useArtistFollowMutation from "../../../hooks/mutations/useArtistFollowMutation";
import { queryKeys, THEME_TYPES } from "../../../constants";
import CheckCircle from "../../../icons/CheckCircle";
import { HeartIcon, HeartIconActive } from "../../../icons/HeartIcon";
import "./Artist.css";

const artistInfoSelector = (state) => state.artistInfo;
const themeSelector = (state) => state.theme;

const Artist = () => {
  const artistInfo = useAppStore(artistInfoSelector);
  const theme = useThemeStore(themeSelector);
  const artistId = artistInfo?.artistId;
  const artistQuery = useQueryHook({
    key: queryKeys.ARTIST,
    url: `/artists/${artistId}`,
    id: artistId,
  });
  const isFollowingArtistQuery = useQueryHook({
    id: artistId,
    key: queryKeys.ARTIST_FOLLOW_STATUS,
    url: `/me/following/contains?ids=${artistId}&type=artist`,
  });
  const isFollowing = isFollowingArtistQuery?.data?.data?.[0];
  const toggleFollow = useArtistFollowMutation({
    isFollowing,
    artistId,
  });

  const togglePlaylistFollow = () => {
    if (isFollowing !== undefined) {
      if (isFollowing) {
        toggleFollow.mutate(true);
      } else {
        toggleFollow.mutate(false);
      }
    }
  };

  if (artistQuery.isLoading) {
    return <div className="dark:text-white">Loading..</div>;
  }

  if (artistQuery.isError) {
    return <div className="dark:text-white">Failed to load..</div>;
  }

  if (artistQuery.isSuccess) {
    const { images, name, followers } = artistQuery.data?.data || {};
    const artistImage =
      images?.[0]?.url || images?.[1]?.url || images?.[2]?.url || "";

    return (
      <div className="flex justify-between min-w-max">
        <div className="relative flex items-center gap-4">
          <div>
            <img
              src={artistImage}
              alt="album_cover"
              className="h-80 w-80 rounded"
            />
          </div>
          <div className="flex flex-col h-full">
            <div className="flex flex-col flex-1 justify-end mt-16">
              <div className="flex space-x-2 items-center">
                <span className="uppercase tracking-widest text-sm dark:text-white text-gray-500 block">
                  Artist
                </span>
                <span>
                  <CheckCircle />
                </span>
              </div>
              <h1 className="text-9xl block dark:text-white text-gray-500 font-bold">
                {name}
              </h1>
            </div>

            <div className="flex items-end space-x-4 align-bottom flex-1">
              <div className="">
                <button
                  type="button"
                  className="tracking-widest py-2 px-8 bg-blue-500  rounded-3xl uppercase text-center font-bold focus:outline-none hover:scale-110 transform-gpu transition-transform"
                >
                  <span className="">pause</span>
                </button>
              </div>
              <div>
                <div
                  type="button"
                  className="flex border focus:outline-none border-black dark:border-white h-10 w-10 rounded-full items-center justify-center p-4 hover:scale-110 transform-gpu transition-transform duration-150"
                >
                  {isFollowing ? (
                    <HeartIconActive onClick={togglePlaylistFollow} />
                  ) : (
                    <HeartIcon
                      onClick={togglePlaylistFollow}
                      fillColor={
                        theme === THEME_TYPES.THEME_DARK ? "white" : "black"
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end">
          <span className="uppercase tracking-wider text-gray-500 dark:text-white text-sm font-semibold">
            Followers <bold>{followers?.total}</bold>
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default Artist;
