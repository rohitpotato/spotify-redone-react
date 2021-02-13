import React from "react";
import useThemeStore from "../../stores/useThemeStore";
import useAppStore from "../../stores/useAppStore";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import { extractTrackData } from "../../utils/trackUtils";
import { HeartIconActive } from "../../icons/HeartIcon";
import ClockIcon from "../../icons/ClockIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import TrackListItem from "../../components/TrackListItem/TrackListItem";
import { THEME_TYPES } from "../../constants/index";

const themeSelector = (state) => state.theme;
const playlistInfoSelector = (state) => state.playlistInfo;

const PlaylistView = () => {
  const theme = useThemeStore(themeSelector);
  const playlistInfo = useAppStore(playlistInfoSelector);
  const playlistQuery = useGetPlaylist({ id: playlistInfo?.playlistId });

  if (playlistQuery.isLoading) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (playlistQuery.isError) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (playlistQuery.isSuccess) {
    const playlistImage = playlistQuery.data?.data?.images?.[0]?.url;
    const playlistName = playlistQuery.data?.data?.name;
    const playlistFollowers = playlistQuery.data?.data?.followers?.total;
    const playlistOwner = playlistQuery.data?.data?.owner?.display_name;
    const trackLength = playlistQuery.data?.data?.tracks?.items?.length;
    const listType = playlistQuery.data?.data?.type;
    const trackList = playlistQuery.data?.data?.tracks?.items || [];
    return (
      <>
        <div className="flex justify-between min-w-max">
          <div className="relative flex items-center gap-4">
            <div>
              <img
                src={playlistImage}
                alt="album_cover"
                className="h-80 w-80 rounded"
              />
            </div>
            <div className="flex flex-col h-full">
              <div className="flex flex-col flex-1 justify-end mt-16">
                <span className="uppercase tracking-widest text-sm dark:text-white text-gray-500 block">
                  {listType}
                </span>
                <h1 className="text-4xl block dark:text-white text-gray-500 font-bold">
                  {playlistName}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-sm dark:text-white text-gray-500">
                    Created by{" "}
                    <bold className="font-bold text-base">{playlistOwner}</bold>
                  </span>
                  <span className="text-sm dark:text-white text-gray-500">
                    {trackLength} songs
                  </span>
                  <span className="text-sm dark:text-white text-gray-500">
                    10 hr 42 min
                  </span>
                </div>
              </div>

              <div className="flex items-end space-x-4 align-bottom flex-1">
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
                    className="flex border focus:outline-none border-black dark:border-white h-10 w-10 rounded-full items-center justify-center p-4 hover:scale-110 transform-gpu transition-transform duration-150"
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
              Followers <bold>{playlistFollowers}</bold>
            </span>
          </div>
        </div>
        {/* Track Listing  */}
        <div className="w-full py-16">
          {trackList.map((track, index) => {
            const {
              addedAt,
              id,
              name,
              duration,
              previewUrl,
              albumId,
              albumName,
              artistId,
              artistName,
              musicImage,
            } = extractTrackData(track);
            return (
              <TrackListItem
                key={id}
                id={id}
                index={index}
                title={name}
                duration={duration}
                album={albumName}
                albumId={albumId}
                artist={artistName}
                artistId={artistId}
                url={previewUrl}
                addedAt={addedAt}
                list={trackList}
                image={musicImage}
              />
            );
          })}
        </div>
      </>
    );
  }

  return null;
};

export default PlaylistView;
