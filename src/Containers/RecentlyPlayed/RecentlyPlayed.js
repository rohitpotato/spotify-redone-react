import React from "react";
import { v4 as uuid } from "uuid";
import useQueryHook from "../../hooks/useQueryHook";
import TrackListItem from "../../components/TrackListItem/TrackListItem";
import { extractTrackData } from "../../utils/trackUtils";
import { queryKeys } from "../../constants";
import Wrapper from "../Wrapper/Wrapper";

const RecentlyPlayed = () => {
  const recentlyPlayedQuery = useQueryHook({
    key: queryKeys.RECENTLY_PLAYED,
    url: "/me/player/recently-played?limit=50",
  });

  return (
    <Wrapper query={recentlyPlayedQuery}>
      {(queryData) => {
        const trackList = queryData.data?.data?.items;
        return (
          <div>
            <div>
              <h1 className="text-4xl font-bold tracking-wide dark:text-white">
                Recently Played
              </h1>
            </div>
            <div className="w-full py-16 min-w-max">
              <div className="flex flex-auto justify-between items-center p-4 dark:hover:bg-gray-500 hover:bg-gray-200 transition w-full">
                {["", "TITLE", "ALBUM", "ARTIST", "DURATION"].map(
                  (header, index) => {
                    const width = index === 0 ? "w-1/12" : "w-2/4";
                    return (
                      <div key={header} className={`${width}`}>
                        <span className="tracking-wider text-sm text-gray-500">
                          {header}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
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
          </div>
        );
      }}
    </Wrapper>
  );
};

export default RecentlyPlayed;
