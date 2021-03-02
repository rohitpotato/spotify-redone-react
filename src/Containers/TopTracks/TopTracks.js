import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { useInfiniteQuery } from "react-query";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import TrackListItem from "../../components/TrackListItem/TrackListItem";
import Loader from "../../components/Loader/LoadingComponent";
import { extractQueryParam, extractTrackData } from "../../utils/trackUtils";
import { queryKeys, paginationLimit } from "../../constants";
import request from "../../utils/axiosClient";

const fetchTracks = async ({ pageParam = 0 }) => {
  const results = await request.get(
    `/me/tracks?limit=${paginationLimit}&offset=${pageParam}`
  );
  return results;
};

const TopTracks = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    isSuccess,
    data,
  } = useInfiniteQuery(queryKeys.TOP_TRACKS, fetchTracks, {
    getNextPageParam: (lastpage) =>
      extractQueryParam(lastpage.data?.next, "offset"),
  });
  const loadMoreRef = useRef(null);

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
    return <div>Failed to load.</div>;
  }

  if (isSuccess) {
    return (
      <div>
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            Top Tracks
          </h1>
        </div>
        <div className="w-full py-16 min-w-max">
          {data.pages.map((page) => (
            <React.Fragment key={uuid()}>
              {page.data?.items?.map((track, index) => {
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
                    list={page.data.items}
                    image={musicImage}
                  />
                );
              })}
            </React.Fragment>
          ))}
        </div>
        <div ref={loadMoreRef} className="h-8 w-8 py-3" />
        {isFetchingNextPage && (
          <div className="grid place-items-center">
            <Loader />
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default TopTracks;
