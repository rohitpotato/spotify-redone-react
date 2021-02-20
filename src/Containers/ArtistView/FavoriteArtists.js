import React from "react";
import { v4 as uuid } from "uuid";
import Wrapper from "../Wrapper/Wrapper";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import useGetArtistsAndTracks from "../../hooks/useGetArtistsAndTracks";

const FavoriteArtists = () => {
  const getArtistsQuery = useGetArtistsAndTracks({ type: "artists" });

  return (
    <Wrapper query={getArtistsQuery}>
      {(query) => (
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-wide dark:text-white">
              Your Favorite Artists
            </h1>
          </div>
          <div className="album-list">
            {query.data?.data?.items?.map(
              ({ id: artistId, name: artistName, images }) => (
                <div key={uuid()}>
                  <ArtistCard
                    artistId={artistId}
                    artistName={artistName}
                    image={images?.[0]?.url}
                  />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default FavoriteArtists;
