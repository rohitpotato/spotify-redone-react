import React from "react";
import { v4 as uuid } from "uuid";
import useAppStore from "../../stores/useAppStore";
import useQueryHook from "../../hooks/useQueryHook";
import { extractTrackDataFromAlbum } from "../../utils/trackUtils";
import "../../components/TrackListItem/TrackListItem.css";
import { queryKeys } from "../../constants/index";
import Wrapper from "../Wrapper/Wrapper";
import ArtistTrackList from "../../components/ArtistTrackList/ArtistTrackList";
import Banner from "../../components/Banner/Banner";

const albumInfoSelector = (state) => state.albumInfo;

const AlbumView = () => {
  const albumInfo = useAppStore(albumInfoSelector);
  const currentAlbumId = albumInfo?.albumId;
  const albumQuery = useQueryHook({
    key: [queryKeys.ALBUM_TRACKS, currentAlbumId],
    url: `/albums/${currentAlbumId}`,
    id: currentAlbumId,
  });

  return (
    <Wrapper query={albumQuery}>
      {(query) => {
        const albumImage = query.data?.data?.images?.[0]?.url;
        const albumName = query.data?.data?.name;
        const albumOwner = query.data?.data?.artists?.[0]?.name;
        const trackLength = query.data?.data?.tracks?.items?.length;
        const listType = query.data?.data?.type;
        const trackList = query.data?.data?.tracks?.items || [];

        return (
          <>
            <Banner
              heading={albumName}
              image={albumImage}
              owner={albumOwner}
              noOfTracks={trackLength}
              listType={listType}
              headingType="small"
              isFollowing={false}
            />
            {/* Track Listing  */}
            <div className="w-full py-16 min-w-max">
              {trackList.map((track, index) => {
                const {
                  name,
                  duration,
                  previewUrl,
                } = extractTrackDataFromAlbum(track);
                return (
                  <ArtistTrackList
                    key={uuid()}
                    name={name}
                    index={index}
                    image={albumImage}
                    previewUrl={previewUrl}
                    list={trackList}
                    duration={duration}
                  />
                );
              })}
            </div>
          </>
        );
      }}
    </Wrapper>
  );
};

export default AlbumView;
