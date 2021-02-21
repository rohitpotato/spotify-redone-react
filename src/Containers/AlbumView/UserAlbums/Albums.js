import React from "react";
import { v4 as uuid } from "uuid";
import Wrapper from "../../Wrapper/Wrapper";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import { queryKeys } from "../../../constants";
import useQueryHook from "../../../hooks/useQueryHook";

const Albums = () => {
  const getAlbumsQuery = useQueryHook({
    key: queryKeys.USER_ALBUMS,
    url: `me/albums`,
  });

  return (
    <Wrapper query={getAlbumsQuery}>
      {(query) => (
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-wide dark:text-white">
              Your Favorite Albums
            </h1>
          </div>
          <div className="album-list">
            {query.data?.data?.items?.map(({ album }) => {
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
      )}
    </Wrapper>
  );
};

export default Albums;
