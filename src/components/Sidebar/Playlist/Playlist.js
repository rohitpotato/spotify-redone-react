import React from "react";
import { queryKeys, tabs } from "../../../constants";
import useQueryHook from "../../../hooks/useQueryHook";
import useAppStore from "../../../stores/useAppStore";

const setCurrentTabSelector = (state) => state.setCurrentTab;
const setPlaylistInfoSelector = (state) => state.setPlaylistInfo;

const Playlist = () => {
  const playlistQuery = useQueryHook({
    url: "/me/playlists",
    key: queryKeys.USER_PLAYLISTS,
  });
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setPlaylistInfo = useAppStore(setPlaylistInfoSelector);

  const handleClick = (playlistId, playlistName) => {
    setCurrentTab(tabs.PLAYLIST_LIST_VIEW);
    setPlaylistInfo({ playlistId, playlistName });
  };

  if (playlistQuery.isLoading) {
    return "Loading...";
  }

  if (playlistQuery.isError) {
    return <div>Failed to Load</div>;
  }

  if (playlistQuery.isSuccess) {
    return (
      <div>
        {playlistQuery.data.data.items.map(
          ({ id: playlistId, name: playlistName }) => (
            <button
              onClick={() => handleClick(playlistId, playlistName)}
              key={playlistId}
              type="button"
              className="py-2 text-gray-500 hover:text-gray-900 font-semibold text-sm dark:text-gray-400 truncate dark:hover:text-white w-full focus:outline-none transition"
            >
              <span className="flex items-center">{playlistName}</span>
            </button>
          )
        )}
      </div>
    );
  }

  return null;
};

export default Playlist;
