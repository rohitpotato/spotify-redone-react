import React from "react";
import { v4 as uuid } from "uuid";
import useAppStore from "../../stores/useAppStore";
import useQueryHook from "../../hooks/useQueryHook";
import { extractTrackDataFromAlbum } from "../../utils/trackUtils";
import "../../components/TrackListItem/TrackListItem.css";
import { queryKeys } from "../../constants/index";
import ArtistTrackList from "../../components/ArtistTrackList/ArtistTrackList";

const albumInfoSelector = (state) => state.albumInfo;

const AlbumView = () => {
  const albumInfo = useAppStore(albumInfoSelector);
  const currentAlbumId = albumInfo?.albumId;
  const albumQuery = useQueryHook({
    key: [queryKeys.ALBUM_TRACKS, currentAlbumId],
    url: `/albums/${currentAlbumId}`,
    id: currentAlbumId,
  });

  if (albumQuery.isLoading) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (albumQuery.isError) {
    return <div className="dark:text-white">Loading...</div>;
  }

  if (albumQuery.isSuccess) {
    const albumImage = albumQuery.data?.data?.images?.[0]?.url;
    const albumName = albumQuery.data?.data?.name;
    const albumOwner = albumQuery.data?.data?.artists?.[0]?.name;
    const trackLength = albumQuery.data?.data?.tracks?.items?.length;
    const listType = albumQuery.data?.data?.type;
    const trackList = albumQuery.data?.data?.tracks?.items || [];

    return (
      <>
        <div className="flex justify-between min-w-max">
          <div className="flex items-center gap-4 item-title">
            <div>
              <img
                src={albumImage}
                alt="album_cover"
                className="h-80 w-80 rounded"
              />
            </div>
            <div className="flex flex-col h-full">
              <div className="flex flex-col flex-1 justify-end mt-16">
                <span className="uppercase tracking-widest text-sm dark:text-white text-gray-500 block">
                  {listType}
                </span>
                <h1 className="text-5xl block dark:text-white text-gray-500 font-bold">
                  {albumName}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="dark:text-white text-sm">by</span>
                  <span className="dark:text-white text-gray-500 font-bold text-base">
                    {albumOwner}
                  </span>
                  <span className="text-sm dark:text-white text-gray-500">
                    {trackLength} songs
                  </span>
                  <span className="text-sm dark:text-white text-gray-500">
                    10 hr 42 min
                  </span>
                </div>
              </div>

              <div className="flex items-end space-x-4 align-bottom flex-1">
                <div className="">
                  <button
                    type="button"
                    className="tracking-widest py-2 px-8 bg-blue-500 rounded-3xl uppercase text-center font-bold focus:outline-none hover:scale-110 transform-gpu transition-transform"
                  >
                    <span className="">pause</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Track Listing  */}
        <div className="w-full py-16 min-w-max">
          {trackList.map((track, index) => {
            const { name, duration, previewUrl } = extractTrackDataFromAlbum(
              track
            );
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
  }

  return null;
};

export default AlbumView;
