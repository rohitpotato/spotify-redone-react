import React from "react";
import CardView from "../../../components/CardView/CardView";
import { queryKeys, tabs } from "../../../constants";
import useQueryHook from "../../../hooks/useQueryHook";
import useAppStore from "../../../stores/useAppStore";

const categoryInfoSelector = (state) => state.categoryInfo;
const setPlaylistInfoSelector = (state) => state.setPlaylistInfo;
const setCurrentTabSelector = (state) => state.setCurrentTab;

const SubPlaylistView = () => {
  const { id, name } = useAppStore(categoryInfoSelector);
  const setPlaylistInfo = useAppStore(setPlaylistInfoSelector);
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const getPlaylistCategory = useQueryHook({
    key: [queryKeys.FEATURED_PLAYLISTS, id],
    id,
    url: `/browse/categories/${id}/playlists`,
  });

  const handleCardClick = (playlistId, playlistName) => {
    setPlaylistInfo({ playlistId, playlistName });
    setCurrentTab(tabs.PLAYLIST_LIST_VIEW);
  };

  if (getPlaylistCategory.isLoading) {
    return <div>Loading...</div>;
  }

  if (getPlaylistCategory.isError) {
    return <div>Failed to load.</div>;
  }

  if (getPlaylistCategory.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            {name || "Playlist for you"}
          </h1>
        </div>
        <div className="album-list">
          {getPlaylistCategory.data?.data?.playlists?.items?.map(
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

export default SubPlaylistView;
