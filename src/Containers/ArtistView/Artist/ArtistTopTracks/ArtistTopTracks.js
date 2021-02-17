import React from "react";
import useAppStore from "../../../../stores/useAppStore";
import useQueryHook from "../../../../hooks/useQueryHook";
import ArtistTrackList from "../../../../components/ArtistTrackList/ArtistTrackList";
import { queryKeys } from "../../../../constants";

const artistInfoSelector = (state) => state.artistInfo;

const ArtistTopTracks = () => {
  const artistInfo = useAppStore(artistInfoSelector);
  const artistId = artistInfo?.artistId;

  const artistTopTracksQuery = useQueryHook({
    id: artistId,
    key: queryKeys.ARTIST_TOP_TRACKS,
    url: `artists/${artistId}/top-tracks?market=IN`,
  });

  if (artistTopTracksQuery.isLoading) {
    return <div className="dark:text-white ">Loading..</div>;
  }

  if (artistTopTracksQuery.isError) {
    return <div className="dark:text-white ">Failed to load</div>;
  }

  if (artistTopTracksQuery.isSuccess) {
    const trackList = artistTopTracksQuery.data?.data?.tracks;

    return (
      <div className="flex-shrink-0">
        <div className="dark:text-white font-semibold w-full text-3xl pt-10 pb-6">
          Popular
        </div>
        {trackList.map((track, index) => {
          const {
            id,
            name,
            preview_url: previewUrl,
            album,
            artists: artistData,
          } = track;
          const { name: albumName, id: albumId } = album || {};
          const trackImage =
            album?.images?.[2].url ||
            album?.images?.[1].url ||
            album?.images?.[0].url ||
            "";
          const artists = artistData?.[0].name || "";
          return (
            <ArtistTrackList
              key={id}
              name={name}
              index={index}
              image={trackImage}
              previewUrl={previewUrl}
              artistInfo={artists}
              list={trackList}
              albumName={albumName}
            />
          );
        })}
      </div>
    );
  }

  return null;
};

export default ArtistTopTracks;
