export function extractTrackData(trackData) {
  const { added_at: addedAt } = trackData;
  const {
    album,
    artists,
    id,
    preview_url: previewUrl,
    name,
    duration_ms: duration,
  } = trackData?.track || {};
  const { id: albumId, name: albumName, images } = album || {};
  const { name: artistName, id: artistId } = artists?.[0] || {};
  const musicImage = images?.[2]?.url || images?.[1]?.url || images?.[0]?.url;

  return {
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
  };
}

export const extractTrackDataFromAlbum = (trackData) => {
  const { added_at: addedAt } = trackData;
  const {
    artists,
    id,
    preview_url: previewUrl,
    name,
    duration_ms: duration,
    image,
  } = trackData || {};
  const { name: artistName, id: artistId } = artists?.[0] || {};
  return {
    addedAt,
    id,
    name,
    image,
    duration,
    previewUrl,
    artistId,
    artistName,
  };
};

export const convertDuration = (ts) =>
  new Date(ts * 1000).toISOString().substr(11, 8);

export const convertDate = (date) => {
  const dateCp = new Date(date);
  return (
    [dateCp.getDay(), dateCp.getMonth(), dateCp.getFullYear()].join("-") || ""
  );
};

export const extractOffset = (string) => {
  try {
    const url = new URL(string);
    const offset = url.searchParams.get("offset");
    return offset || undefined;
  } catch (e) {
    return undefined;
  }
};
