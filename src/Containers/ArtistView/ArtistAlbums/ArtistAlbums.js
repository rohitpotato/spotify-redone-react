import React from "react";
import { v4 as uuid } from "uuid";
import useQueryHook from "../../../hooks/useQueryHook";
import useAppStore from "../../../stores/useAppStore";
import { queryKeys } from "../../../constants";
import Wrapper from "../../Wrapper/Wrapper";
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

  return (
    <Wrapper query={artistAlbumsQuery}>
      {(query) => {
        const albums = query.data?.data?.items;
        return (
          <div className="pb-8">
            <h3 className="text-4xl dark:text-white font-semibold py-6">
              Albums
            </h3>
            <div className="container">
              {albums.map(({ id, name, images, release_date: releaseDate }) => {
                const albumImage =
                  images?.[2]?.url ||
                  images?.[1]?.url ||
                  images?.[0]?.url ||
                  "";
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
      }}
    </Wrapper>
  );
};

export default AritstAlbums;
