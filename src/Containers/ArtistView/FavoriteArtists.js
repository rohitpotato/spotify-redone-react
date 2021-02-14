import React from "react";
import ArtistCard from "../../components/ArtistCard/ArtistCard";
import useGetArtistsAndTracks from "../../hooks/useGetArtistsAndTracks";

const FavoriteArtists = () => {
  const getArtistsQuery = useGetArtistsAndTracks({ type: "artists" });
  if (getArtistsQuery.isLoading) {
    <div className="dark:text-whtie">Loading..</div>;
  }

  if (getArtistsQuery.isError) {
    <div>Failed to load..</div>;
  }

  if (getArtistsQuery.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            Your Favorite Artists
          </h1>
        </div>
        <div className="album-list">
          {getArtistsQuery.data?.data?.items?.map(
            ({ id: artistId, name: artistName, images }) => (
              <div key={artistId}>
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
    );
  }

  return null;
};

export default FavoriteArtists;
