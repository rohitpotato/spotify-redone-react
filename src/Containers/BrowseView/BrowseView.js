import React from "react";
import NewReleases from "./NewReleases/NewReleases";
import FeaturedPlaylist from "./FeaturedPlaylists/FeaturedPlaylists";
import "./Browse.css";

const BrowseView = () => {
  return (
    <>
      <div className="space-y-8">
        <NewReleases />
        <FeaturedPlaylist />
      </div>
    </>
  );
};

export default BrowseView;
