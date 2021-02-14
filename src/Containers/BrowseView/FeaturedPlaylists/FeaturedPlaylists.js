import React from "react";
import CardView from "../../../components/CardView/CardView";
import useQueryHook from "../../../hooks/useQueryHook";
import useAppStore from "../../../stores/useAppStore";
import { queryKeys, tabs } from "../../../constants";

const setPlaylistInfoSelector = (state) => state.setPlaylistInfo;
const setCurrentTabSelector = (state) => state.setCurrentTab;

const FeaturedPlaylists = () => {
  const featuredPlaylistsQuery = useQueryHook({
    url: "/browse/featured-playlists",
    key: queryKeys.FEATURED_PLAYLISTS,
  });
  const setPlaylistInfo = useAppStore(setPlaylistInfoSelector);
  const setCurrentTab = useAppStore(setCurrentTabSelector);

  const handleCardClick = (playlistId, playlistName) => {
    setPlaylistInfo({ playlistId, playlistName });
    setCurrentTab(tabs.PLAYLIST_LIST_VIEW);
  };

  if (featuredPlaylistsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (featuredPlaylistsQuery.isError) {
    return <div>Failed to load.</div>;
  }

  if (featuredPlaylistsQuery.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            Featured Playlists
          </h1>
        </div>
        <div className="album-list">
          {featuredPlaylistsQuery.data?.data?.playlists?.items?.map(
            ({ id: playlistId, name: playlistName, images, description }) => (
              <div key={playlistId}>
                <CardView
                  onCardClick={() => handleCardClick(playlistId, playlistName)}
                  description={description}
                  name={playlistName}
                  imageUrl={images?.[0]?.url}
                />
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default FeaturedPlaylists;
