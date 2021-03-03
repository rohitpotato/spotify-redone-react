import React, { useCallback } from "react";
import { v4 as uuid } from "uuid";
import CardView from "../../../components/CardView/CardView";
import useAppStore from "../../../stores/useAppStore";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryKeys, tabs } from "../../../constants";
import Wrapper from "../../Wrapper/Wrapper";

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

  return (
    <Wrapper query={newReleasesQuery}>
      {(query) => (
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-wide dark:text-white">
              New Releases
            </h1>
          </div>
          <div className="album-list">
            {query.data?.data?.albums?.items?.map(({ id, name, images }) => (
              <div key={uuid()}>
                <CardView
                  onCardClick={() => handleCardClick(id, name)}
                  name={name}
                  imageUrl={images?.[1]?.url}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default NewReleases;
