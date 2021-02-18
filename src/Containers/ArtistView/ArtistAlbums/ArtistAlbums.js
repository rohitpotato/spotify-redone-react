import React from "react";
import { v4 as uuid } from "uuid";
import useQueryHook from "../../../hooks/useQueryHook";
import useAppStore from "../../../stores/useAppStore";
import { queryKeys } from "../../../constants";
import ArtistAlbumCard from "../../../components/ArtistAlbumCard/ArtistAlbumCard";
import "./ArtistAlbums.css";

const artistInfoSelector = (state) => state.artistInfo;

const AritstAlbums = () => {
  const artistInfo = useAppStore(artistInfoSelector);
  const artistId = artistInfo?.artistId;
  const artistAlbumsQuery = useQueryHook({
    key: queryKeys.ARTIST_ALBUMS,
    id: artistId,
    url: `artists/${artistId}/albums`,
  });

  if (artistAlbumsQuery.isLoading) {
    return <div className="dark:text-white">Loading..</div>;
  }

  if (artistAlbumsQuery.isError) {
    return <div className="dark:text-white">Failed to load..</div>;
  }

  if (artistAlbumsQuery.isSuccess) {
    const albums = artistAlbumsQuery.data?.data?.items;
    return (
      <div className="pb-8">
        <h3 className="text-4xl dark:text-white font-semibold py-6">Albums</h3>
        <div className="container">
          {albums.map(({ id, name, images, release_date: releaseDate }) => {
            const albumImage =
              images?.[2]?.url || images?.[1]?.url || images?.[0]?.url || "";
            return (
              <ArtistAlbumCard
                key={uuid()}
                name={name}
                albumId={id}
                albumImage={albumImage}
                releaseDate={releaseDate}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default AritstAlbums;
