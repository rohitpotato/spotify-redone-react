import React from "react";
import { Volume, VolumeMute } from "../../../icons/VolumeIcon";
import Slider from "../../Slider/Slider";
import useAudioStore from "../../../stores/useAudioStore";

const setVolumeSelector = (state) => state.setVolume;
const volumeSelector = (state) => state.volume;

const VolumeControl = () => {
  const volume = useAudioStore(volumeSelector);
  const setVolume = useAudioStore(setVolumeSelector);
  return (
    <div className="md:flex hidden justify-between space-x-4">
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
