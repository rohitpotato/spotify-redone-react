import React from "react";
import { v4 as uuid } from "uuid";
import useAppStore from "../../../../stores/useAppStore";
import useQueryHook from "../../../../hooks/useQueryHook";
import { queryKeys } from "../../../../constants";
import RelatedArtistCard from "../../../../components/RelatedArtistCard/RelatedArtistCard";
import Wrapper from "../../../Wrapper/Wrapper";

const artistInfoSelector = (state) => state.artistInfo;

const RelatedArtists = () => {
  const artistInfo = useAppStore(artistInfoSelector);
  const artistId = artistInfo?.artistId;

  const artistRelatedArtistQuery = useQueryHook({
    id: artistId,
    key: queryKeys.RELATED_ARTISTS,
    url: `artists/${artistId}/related-artists`,
  });

  return (
    <Wrapper query={artistRelatedArtistQuery}>
      {(query) => {
        const relatedArtists = query.data?.data?.artists;
        return (
          <div>
            <div className="dark:text-white text-3xl font-bold tracking-wider pt-10 pb-6">
              Fans Also like
            </div>
            <div>
              {relatedArtists?.slice(0, 10)?.map(({ id, name, images }) => {
                const image =
                  images?.[2]?.url || images?.[1]?.url || images?.[0]?.url;
                return (
                  <RelatedArtistCard
                    artistName={name}
                    image={image}
                    artistId={id}
                    key={uuid()}
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

export default RelatedArtists;
