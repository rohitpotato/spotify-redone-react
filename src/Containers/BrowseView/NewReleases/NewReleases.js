import React from "react";
import CardView from "../../../components/CardView/CardView";
import useGetNewReleases from "../../../hooks/useGetNewReleases";

const NewReleases = () => {
  const newReleasesQuery = useGetNewReleases();

  if (newReleasesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (newReleasesQuery.isError) {
    return <div>Failed to load.</div>;
  }

  if (newReleasesQuery.isSuccess) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-wide dark:text-white">
            New Releases
          </h1>
        </div>
        <div className="album-list">
          {newReleasesQuery.data?.data?.albums?.items?.map(
            ({ id, name, images }) => (
              <div key={id}>
                <CardView name={name} imageUrl={images?.[0]?.url} />
              </div>
            )
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default NewReleases;
