import { useQuery } from "react-query";
import request from "../utils/axiosClient";
import useAuthStore from "../stores/useAuthStore";
import { queryKeys } from "../constants";

const tokenSelector = (state) => state.token;

export default function useGetArtistsAndTracks({ type = "artists" }) {
  const token = useAuthStore(tokenSelector);
  const getArtistAndTracksQuery = useQuery(
    queryKeys.ARTISTS,
    () => request(`/me/top/${type}?limit=50`),
    {
      enabled: !!token,
    }
  );
  return getArtistAndTracksQuery;
}
