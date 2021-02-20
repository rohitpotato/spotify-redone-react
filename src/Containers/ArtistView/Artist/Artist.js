import React, { useCallback } from "react";
import useAppStore from "../../../stores/useAppStore";
import useQueryHook from "../../../hooks/useQueryHook";
import useArtistFollowMutation from "../../../hooks/mutations/useArtistFollowMutation";
import { queryKeys } from "../../../constants";
import Wrapper from "../../Wrapper/Wrapper";
import Banner from "../../../components/Banner/Banner";
import ArtistTopTracks from "./ArtistTopTracks/ArtistTopTracks";
import RelatedArtists from "./RelatedArtists/RelatedArtists";
import AritstAlbums from "../ArtistAlbums/ArtistAlbums";
import "./Artist.css";

const artistInfoSelector = (state) => state.artistInfo;

const Artist = () => {
  const artistInfo = useAppStore(artistInfoSelector);
  const artistId = artistInfo?.artistId;
  const artistQuery = useQueryHook({
    key: [queryKeys.ARTIST, artistId],
    url: `/artists/${artistId}`,
    id: artistId,
  });
  const isFollowingArtistQuery = useQueryHook({
    id: artistId,
    key: queryKeys.ARTIST_FOLLOW_STATUS,
    url: `/me/following/contains?ids=${artistId}&type=artist`,
  });
  const isFollowing = isFollowingArtistQuery?.data?.data?.[0];
  const toggleFollow = useArtistFollowMutation({
    isFollowing,
    artistId,
  });

  const toggleArtistFollow = useCallback(() => {
    if (isFollowing !== undefined) {
      if (isFollowing) {
        toggleFollow.mutate(true);
      } else {
        toggleFollow.mutate(false);
      }
    }
  }, [isFollowing, toggleFollow]);

  return (
    <div className="w-full">
      <Wrapper query={artistQuery}>
        {(query) => {
          const { images, name, followers } = query.data?.data || {};
          const artistImage =
            images?.[0]?.url || images?.[1]?.url || images?.[2]?.url || "";
          return (
            <Banner
              heading={name}
              listType="ARTIST"
              isArtist
              headingType="large"
              isFollowable
              followerCount={followers?.total}
              image={artistImage}
              toggleFollow={toggleArtistFollow}
              isFollowing={isFollowing}
            />
          );
        }}
      </Wrapper>
      <div className="flex lg:flex-row flex-col w-full">
        {/* Top Tracks  */}
        <div className=" flex-shrink-0 flex-1">
          <ArtistTopTracks />
        </div>
        <div className=" flex-shrink-0 flex-1 flex lg:justify-center">
          <RelatedArtists />
        </div>
      </div>
      <div>
        <AritstAlbums />
      </div>
    </div>
  );
};

export default Artist;
