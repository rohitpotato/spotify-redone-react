import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { useInfiniteQuery } from "react-query";
import useQueryHook from "../../hooks/useQueryHook";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import useAppStore from "../../stores/useAppStore";
import useGetPlaylistFollowStatus from "../../hooks/useGetPlaylistFollowStatus";
import usePlaylistFollowMutation from "../../hooks/mutations/usePlaylistFollowMutation";
import { extractQueryParam, extractTrackData } from "../../utils/trackUtils";
import Wrapper from "../Wrapper/Wrapper";
import TrackListItem from "../../components/TrackListItem/TrackListItem";
import Banner from "../../components/Banner/Banner";
import Loader from "../../components/Loader/LoadingComponent";
import "../../components/TrackListItem/TrackListItem.css";
import { queryKeys, paginationLimit } from "../../constants/index";
import request from "../../utils/axiosClient";

const playlistInfoSelector = (state) => state.playlistInfo;

const PlaylistView = () => {
  const playlistInfo = useAppStore(playlistInfoSelector);
  const playlistId = playlistInfo?.playlistId;

  const loadMoreRef = useRef(null);

  const playlistQuery = useQueryHook({
    key: [queryKeys.PLAYLIST_DETAILS, playlistId],
    id: playlistId,
    url: `/playlists/${playlistId}?fields=name,images,followers,type,owner`,
  });

  const {
    isFetchingNextPage,
    isLoading,
    isError,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    data,
  } = useInfiniteQuery(
    [queryKeys.PLAYLIST_TRACKS, playlistId],
    ({ pageParam = 0 }) =>
      request.get(
        `/playlists/${playlistId}/tracks?offset=${pageParam}&limit=${paginationLimit}`
      ),
    {
      getNextPageParam: (lastPage) =>
        extractQueryParam(lastPage.data?.next, "offset"),
    }
  );

  const isFollowingQuery = useGetPlaylistFollowStatus({
    id: playlistId,
  });

  const isFollowing = isFollowingQuery?.data?.data?.[0];
  const toggleFollow = usePlaylistFollowMutation({
    isFollowing,
    playlistId,
  });

  useIntersectionObserver({
    target: loadMoreRef,
    callback: fetchNextPage,
    options: {
      threshold: 0.8,
      defaultIntersection: false,
      once: false,
      enabled: hasNextPage,
    },
  });

  if (isLoading) {
    return (
      <div className="grid place-items-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (isSuccess) {
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
        <Wrapper query={playlistQuery}>
          {(query) => {
            const playlistImage = query.data?.data.images?.[0]?.url;
            const playlistName = query.data?.data.name;
            const playlistFollowers = query.data?.data.followers?.total;
            const playlistOwner = query.data?.data.owner?.display_name;
            const listType = query.data?.data.type;
            return (
              <Banner
                heading={playlistName}
                image={playlistImage}
                followerCount={playlistFollowers}
                isFollowing={isFollowing}
                isFollowable
                listType={listType}
                owner={playlistOwner}
                toggleFollow={togglePlaylistFollow}
                headingType="small"
              />
            );
          }}
        </Wrapper>

        <div className="w-full py-16 min-w-max">
          {data.pages.map((page) => {
            const trackList = page?.data?.items || [];
            return (
              <React.Fragment key={uuid()}>
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
              </React.Fragment>
            );
          })}
        </div>
        <div ref={loadMoreRef} className="h-8 w-8 py-3" />
        {isFetchingNextPage && (
          <div className="grid place-items-center">
            <Loader />
          </div>
        )}
      </>
    );
  }
  return null;
};

export default PlaylistView;
