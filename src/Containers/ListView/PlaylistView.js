import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";
import useAppStore from "../../stores/useAppStore";
import useQueryHook from "../../hooks/useQueryHook";
import useGetPlaylistFollowStatus from "../../hooks/useGetPlaylistFollowStatus";
import usePlaylistFollowMutation from "../../hooks/mutations/usePlaylistFollowMutation";
import { extractTrackData } from "../../utils/trackUtils";
import TrackListItem from "../../components/TrackListItem/TrackListItem";
import Banner from "../../components/Banner/Banner";
import "../../components/TrackListItem/TrackListItem.css";
import { queryKeys } from "../../constants/index";
import usePrefetchTrackInfo from "../../hooks/usePrefetchTrackInfo";

const playlistInfoSelector = (state) => state.playlistInfo;

const PlaylistView = () => {
  const playlistInfo = useAppStore(playlistInfoSelector);
  const playlistId = playlistInfo?.playlistId;
  const playlistQuery = useQueryHook({
    key: [queryKeys.PLAYLIST, playlistId],
    url: `/playlists/${playlistId}`,
    id: playlistId,
  });
  const isFollowingQuery = useGetPlaylistFollowStatus({
    id: playlistId,
  });
  const isFollowing = isFollowingQuery?.data?.data?.[0];
  const toggleFollow = usePlaylistFollowMutation({
    isFollowing,
    playlistId,
  });

  // const trackList = useMemo(() => {
  //   console.log("memo bro?");
  //   return playlistQuery.data?.data?.tracks?.items || [];
  // }, [playlistQuery.data?.data?.tracks?.items]);
  // const trackListIds = useMemo(() => {
  //   return trackList.map((track) => extractTrackDataFromAlbum(track));
  // }, [trackList]);
  // usePrefetchTrackInfo({ list: trackListIds });

  if (playlistQuery.isLoading) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (playlistQuery.isError) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (playlistQuery.isSuccess) {
    const playlistImage = playlistQuery.data?.data?.images?.[0]?.url;
    const playlistName = playlistQuery.data?.data?.name;
    const playlistFollowers = playlistQuery.data?.data?.followers?.total;
    const playlistOwner = playlistQuery.data?.data?.owner?.display_name;
    const trackLength = playlistQuery.data?.data?.tracks?.items?.length;
    const listType = playlistQuery.data?.data?.type;
    const trackList = playlistQuery.data?.data?.tracks?.items || [];

    const togglePlaylistFollow = () => {
      if (isFollowing !== undefined) {
        if (isFollowing) {
          toggleFollow.mutate(true);
        } else {
          toggleFollow.mutate(false);
        }
      }
    };

    return (
      <>
        <Banner
          heading={playlistName}
          image={playlistImage}
          followerCount={playlistFollowers}
          isFollowing={isFollowing}
          isFollowable
          listType={listType}
          noOfTracks={trackLength}
          owner={playlistOwner}
          toggleFollow={togglePlaylistFollow}
          headingType="small"
        />
        {/* Track Listing  */}
        <div className="w-full py-16 min-w-max">
          {trackList.map((track, index) => {
            const {
              addedAt,
              id,
              name,
              duration,
              previewUrl,
              albumId,
              albumName,
              artistId,
              artistName,
              musicImage,
            } = extractTrackData(track);
            return (
              <TrackListItem
                key={uuid()}
                id={id}
                index={index}
                title={name}
                duration={duration}
                album={albumName}
                albumId={albumId}
                artist={artistName}
                artistId={artistId}
                url={previewUrl}
                addedAt={addedAt}
                list={trackList}
                image={musicImage}
              />
            );
          })}
        </div>
      </>
    );
  }
  return null;
};

export default PlaylistView;
