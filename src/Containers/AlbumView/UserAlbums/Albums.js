import React from "react";
import { v4 as uuid } from "uuid";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import { queryKeys } from "../../../constants";
import useQueryHook from "../../../hooks/useQueryHook";

const Albums = () => {
  const getAlbumsQuery = useQueryHook({
    key: queryKeys.USER_ALBUMS,
    url: `me/albums`,
  });
  if (getAlbumsQuery.isLoading) {
    return <div className="dark:text-white">Loading..</div>;
  }

  if (getAlbumsQuery.isError) {
    return <div className="dark:text-white">Failed to load..</div>;
  }

  if (getAlbumsQuery.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            Your Favorite Albums
          </h1>
        </div>
        <div className="album-list">
          {getAlbumsQuery.data?.data?.items?.map(({ album }) => {
            const { id: artistId, name, images } = album || {};
            return (
              <div key={uuid()}>
                <AlbumCard
                  albumId={artistId}
                  name={name}
                  albumImage={images?.[0]?.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default Albums;
