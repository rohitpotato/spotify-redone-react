import React, { useCallback } from "react";
import { v4 as uuid } from "uuid";
import CardView from "../../../components/CardView/CardView";
import useAppStore from "../../../stores/useAppStore";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryKeys, tabs } from "../../../constants";

const setAlbumInfoSelector = (state) => state.setAlbumInfo;
const setCurrentTabSelector = (state) => state.setCurrentTab;

const NewReleases = () => {
  const newReleasesQuery = useQueryHook({
    url: "/browse/new-releases",
    key: queryKeys.NEW_RELEASES,
  });
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setAlbumInfo = useAppStore(setAlbumInfoSelector);

  const handleCardClick = useCallback(
    (albumId, albumName) => {
      setAlbumInfo({ albumId, albumName });
      setCurrentTab(tabs.ALBUM);
    },
    [setCurrentTab, setAlbumInfo]
  );

  if (newReleasesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (newReleasesQuery.isError) {
    return <div>Failed to load.</div>;
  }

  if (newReleasesQuery.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            New Releases
          </h1>
        </div>
        <div className="album-list">
          {newReleasesQuery.data?.data?.albums?.items?.map(
            ({ id, name, images }) => (
              <div key={uuid()}>
                <CardView
                  onCardClick={() => handleCardClick(id, name)}
                  name={name}
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

export default NewReleases;
