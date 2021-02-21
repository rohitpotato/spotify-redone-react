import React from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import useQueryHook from "../../../hooks/useQueryHook";
import useAppStore from "../../../stores/useAppStore";
import Wrapper from "../../Wrapper/Wrapper";
import SearchResultCard from "../../../components/SearchResultCard/SearchResultCard";
import { queryKeys, tabs } from "../../../constants";
import "./SearchContainer.css";

const setAlbumInfoSelector = (state) => state.setAlbumInfo;
const setCurrentTabSelector = (state) => state.setCurrentTab;
const setArtistInfoSelector = (state) => state.setArtistInfo;
const setPlaylistInfoSelector = (state) => state.setPlaylistInfo;

const SearchResults = ({ sTerm }) => {
  const searchQuery = useQueryHook({
    key: [queryKeys.SEARCH, sTerm],
    url: `/search?q=${sTerm}&type=album,artist,playlist,track&limit=10`,
    id: sTerm,
    config: {
      enabled: !!sTerm?.length,
    },
  });
  const setCurrentTab = useAppStore(setCurrentTabSelector);
  const setAlbumInfo = useAppStore(setAlbumInfoSelector);
  const setArtistInfo = useAppStore(setArtistInfoSelector);
  const setPlaylistInfo = useAppStore(setPlaylistInfoSelector);

  const handleTrackClick = () => {};

  const handleAlbumClick = (albumId) => {
    setCurrentTab(tabs.ALBUM);
    setAlbumInfo({ albumId });
  };

  const handleArtistClick = (artistId) => {
    setCurrentTab(tabs.ARTIST);
    setArtistInfo({ artistId });
  };

  const handlePlaylistClick = (playlistId) => {
    setPlaylistInfo({ playlistId });
    setCurrentTab(tabs.PLAYLIST_LIST_VIEW);
  };

  return (
    <Wrapper query={searchQuery}>
      {(query) => {
        const tracks = query.data?.data?.tracks;
        const albums = query.data?.data?.albums;
        const artists = query.data?.data?.artists;
        const playlists = query.data?.data?.playlists;
        return (
          <>
            <div className="py-8">
              <h1 className="dark:text-white font-bold text-xl">Songs</h1>
              <div className="grid gap-6 group-container">
                {tracks.items.map(({ id, name, album }) => (
                  <SearchResultCard
                    key={uuid()}
                    image={album?.images[album.images?.length - 1 || 0]?.url}
                    title={name}
                    subTitle={album?.name}
                    onClick={() => handleTrackClick(id)}
                  />
                ))}
              </div>
            </div>
            <div className="py-8">
              <h1 className="dark:text-white font-bold text-xl">Artists</h1>
              <div className="grid gap-6 group-container">
                {artists?.items?.map(({ id, name, images }) => (
                  <SearchResultCard
                    key={uuid()}
                    image={images[images?.length - 1 || 0]?.url}
                    title={name}
                    onClick={() => handleArtistClick(id)}
                  />
                ))}
              </div>
            </div>
            <div className="py-8">
              <h1 className="dark:text-white font-bold text-xl">Albums</h1>
              <div className="grid gap-6 group-container">
                {albums?.items?.map(({ id, name, images }) => (
                  <SearchResultCard
                    key={uuid()}
                    image={images[images?.length - 1 || 0]?.url}
                    title={name}
                    onClick={() => handleAlbumClick(id)}
                  />
                ))}
              </div>
            </div>
            <div className="py-8">
              <h1 className="dark:text-white font-bold text-xl">Playlist</h1>
              <div className="grid gap-6 group-container">
                {playlists.items?.map(({ id, name, images }) => (
                  <SearchResultCard
                    key={uuid()}
                    title={name}
                    image={images[images?.length - 1 || 0]?.url}
                    onClick={() => handlePlaylistClick(id)}
                  />
                ))}
              </div>
            </div>
          </>
        );
      }}
    </Wrapper>
  );
};

SearchResults.propTypes = {
  sTerm: PropTypes.string.isRequired,
};

export default SearchResults;
