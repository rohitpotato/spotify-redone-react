import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Volume, VolumeMute } from "../../../icons/VolumeIcon";
import Slider from "../../Slider/Slider";
import useAudioStore from "../../../stores/useAudioStore";
import { setToLocalStorage } from "../../../utils/localStorageUtils";
import { localStorageKeys } from "../../../constants";

const setVolumeSelector = (state) => state.setVolume;
const volumeSelector = (state) => state.volume;

const VolumeControl = () => {
  const volume = useAudioStore(volumeSelector);
  const setVolume = useAudioStore(setVolumeSelector);
  return (
    <div className="flex justify-between space-x-4">
      {volume === 0 ? <VolumeMute /> : <Volume />}
      <div>
        <Slider
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={setVolume}
        />
      </div>
    </div>
  );
};

// VolumeControl.propTypes = {
//   audioRef: PropTypes.object.isRequired,
// };

export default VolumeControl;
