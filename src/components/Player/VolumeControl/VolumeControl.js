import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Volume } from "../../../icons/VolumeIcon";
import Slider from "../../Slider/Slider";

const VolumeControl = () => {
  const [volume, setVolume] = useState(0);

  return (
    <div className="flex justify-between gap-4">
      <Volume />
      <div>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={volume}
          // onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

// VolumeControl.propTypes = {
//   audioRef: PropTypes.object.isRequired,
// };

export default VolumeControl;
