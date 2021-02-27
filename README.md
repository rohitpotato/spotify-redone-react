# Spotify Redone 🎵🎉

## A spotify client built with [react-query](https://github.com/tannerlinsley/react-query), [zustand](https://github.com/pmndrs/zustand) and [tailwindcss](https://github.com/tailwindlabs/tailwindcss) 🔥 <3

## [View Demo here](https://rohitpotato.github.io/spotify-redone-react)

### Features Include

1. Playback Queue
2. Dark Mode
3. Search for your favorite tracks, artists, albums and playlists
4. Browse through categories, playlists, artists and albums.
5. Follow/Unfollow Playlists and Artists
6. Localstorage persistence saves your volume and theme
7. And a few more..

### Steps to install

1. Get your _CLIENT_ID_ from [spotify developer console](https://developer.spotify.com/dashboard/login).
2. Paste the _CLIENT_ID_ inside `src/constants/index.js`

   Example:

   ```
   const apiCredentials = {
   CLIENT_ID: "YOUR_CLIENT_ID",
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
   ]}

   ```

3. Run `npm install` to install all dependencies
4. Run `npm start` to start the dev server.
