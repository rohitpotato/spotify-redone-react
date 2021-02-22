import React from "react";
import { v4 as uuid } from "uuid";
import useAppStore from "../../../../stores/useAppStore";
import useQueryHook from "../../../../hooks/useQueryHook";
import ArtistTrackList from "../../../../components/ArtistTrackList/ArtistTrackList";
import { queryKeys } from "../../../../constants";
import Wrapper from "../../../Wrapper/Wrapper";

const artistInfoSelector = (state) => state.artistInfo;

const ArtistTopTracks = () => {
  const artistInfo = useAppStore(artistInfoSelector);
  const artistId = artistInfo?.artistId;

  const artistTopTracksQuery = useQueryHook({
    id: artistId,
    key: queryKeys.ARTIST_TOP_TRACKS,
    url: `artists/${artistId}/top-tracks?market=IN`,
  });

  return (
    <Wrapper query={artistTopTracksQuery}>
      {(query) => {
        const trackList = query.data?.data?.tracks;
        return (
          <div className="flex-shrink-0">
            <div className="dark:text-white font-semibold w-full text-3xl pt-10 pb-6">
              Popular
            </div>
            {trackList.map((track, index) => {
              const {
                name,
                preview_url: previewUrl,
                album,
                artists: artistData,
              } = track;
              const { name: albumName, id: albumId } = album || {};
              const trackImage =
                album?.images?.[album?.images?.length - 1]?.url || "";

              const artists = artistData?.[0].name || "";
              return (
                <ArtistTrackList
                  key={uuid()}
                  name={name}
                  index={index}
                  image={trackImage}
                  previewUrl={previewUrl}
                  artistInfo={artists}
                  list={trackList}
                  albumName={albumName}
                  albumId={albumId}
                />
              );
            })}
          </div>
        );
      }}
    </Wrapper>
  );
};

export default ArtistTopTracks;
