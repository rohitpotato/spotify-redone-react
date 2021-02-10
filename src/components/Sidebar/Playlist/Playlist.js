import React from "react";
import useGetPlaylists from "../../../hooks/useGetPlaylists";

const Playlist = () => {
  const playlistQuery = useGetPlaylists();
  if (playlistQuery.isLoading) {
    return "Loading...";
  }

  if (playlistQuery.isError) {
    return <div>Failed to Load</div>;
  }

  if (playlistQuery.isSuccess) {
    return (
      <div>
        {playlistQuery.data.data.items.map((playlist) => (
          <button
            key={playlist.id}
            type="button"
            className="py-2 text-gray-500 hover:text-gray-900 font-semibold text-sm dark:text-gray-400 truncate dark:hover:text-white w-full focus:outline-none transition"
          >
            <span className="flex items-center">{playlist.name}</span>
          </button>
        ))}
      </div>
    );
  }

  return null;
};

export default Playlist;
