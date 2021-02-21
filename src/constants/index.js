export const THEME_TYPES = {
  THEME_DARK: "dark",
  THEME_LIGHT: "light",
};

const apiCredentials = {
  CLIENT_ID: "230be2f46909426b8b80cac36446b52a",
  REDIRECT_URL: "http://localhost:3000/callback",
  SCOPES: [
    "user-library-read",
    "streaming",
    "user-top-read",
    "user-read-private",
    "user-read-recently-played",
    "playlist-read-private",
    "playlist-modify-public",
    "playlist-modify-private",
  ],
};

export const loginRoute = `https://accounts.spotify.com/authorize?client_id=${
  apiCredentials.CLIENT_ID
}&redirect_uri=${encodeURIComponent(
  apiCredentials.REDIRECT_URL
)}&scope=${encodeURIComponent(
  apiCredentials.SCOPES.join(" ")
)}&response_type=token`;

export const BASE_URL = "https://api.spotify.com/v1";

export const queryKeys = {
  USER_PROFILE: "userProfile",
  USER_PLAYLISTS: "userPlaylists",
  NEW_RELEASES: "newReleases",
  FEATURED_PLAYLISTS: "featuredPlaylists",
  CATEGORY_LIST: "categoryList",
  CATEGORY_PLAYLISTS: "categoryPlaylists",
  PLAYLIST: "PLAYLIST",
  PLAYLIST_FOLLOW_STATUS: "PLAYLIST_FOLLOW_STATUS",
  RECENTLY_PLAYED: "recentlyPlayed",
  ARTISTS: "ARTISTS",
  ARTIST: "ARTIST",
  ARTIST_FOLLOW_STATUS: "ARTIST_FOLLOW_STATUS",
  ARTIST_TOP_TRACKS: "ARTIST_TOP_TRACKS",
  RELATED_ARTISTS: "RELATED_ARTISTS",
  ARTIST_ALBUMS: "ARTIST_ALBUMS",
  USER_ALBUMS: "USER_ALBUMS",
  ALBUM_TRACKS: "ALBUM_TRACKS",
  TOP_TRACKS: "TOP_TRACKS",
  TRACK_SAVED_STATUS: "TRACK_SAVED_STATUS",
  SEARCH: "SEARCH",
};

export const tabs = {
  BROWSE: "BROWSE",
  CATEGORIES: "CATEGORIES",
  SUB_PLAYLIST_VIEW: "SUB_PLAYLIST_VIEW",
  PLAYLIST_LIST_VIEW: "LIST_VIEW",
  RECENTLY_PLAYED: "RECENTLY_PLAYED",
  ARTIST_LIST: "ARTIST_LIST",
  ARTIST: "ARTIST",
  ALBUM_LIST: "ALBUM_LIST",
  ALBUM: "ALBUM",
  TOP_TRACKS: "TOP_TRACKS",
  SEARCH_VIEW: "SEARCH_VIEW",
};

export const iconSize = "h-7 w-7";

export const dayMessage = {
  GOOD_MORNING: "Good Morning",
  GOOD_AFTERNOON: "Good Afternoon",
  GOOD_EVENING: "Good Evening",
};

export const localStorageKeys = {
  THEME: "THEME",
  LAST_SAVED_VOLUME: "LAST_SAVED_VOLUME",
  TOKEN_INFORMATION: "TOKEN_INFORMATION",
};

export const playbackOptions = {
  PLAY: "play",
  PAUSE: "pause",
  STOP: "stop",
};

export const tableFieldListNames = {
  TITLE: "TITLE",
  ALBUM: "ALBUM",
  ARTIST: "ARTIST",
  ADDED_AT: "ADDED_AT",
  DURATION: "DURATION",
};
