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
  USER_PLAYLISTS: "userPlaylists",
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
