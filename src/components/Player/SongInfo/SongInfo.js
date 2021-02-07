import React from "react";
import { HeartIcon, HeartIconActive } from "../../../icons/HeartIcon";

const SongInfo = () => {
  const liked = true;
  const url =
    "https://i.scdn.co/image/ab67616d000048516898a982ff3c6049ba52586c";
  return (
    <div className="flex space-x-4 items-center">
      <div>
        <img className="h-12 w-12" src={url} alt="song_cover" />
      </div>
      <div>
        <span className="block text-base font-semibold dark:text-white">
          Blurred Lines
        </span>
        <span className="block text-sm dark:text-white">Robin Thicke</span>
      </div>
      <div>{liked ? <HeartIconActive /> : <HeartIcon />}</div>
    </div>
  );
};

export default SongInfo;
