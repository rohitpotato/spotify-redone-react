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
