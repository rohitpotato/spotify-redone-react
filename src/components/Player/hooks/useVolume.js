import { useEffect, useRef } from "react";
import useFirstRender from "../../../hooks/useFirstRender";
import { localStorageKeys } from "../../../constants";
import {
  setToLocalStorage,
  getFromLocalStorage,
} from "../../../utils/localStorageUtils";

export default function useVolume({ audioRef, state, controls }) {
  const didMount = useRef(false);

  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    console.log(
      "from storage",
      getFromLocalStorage(localStorageKeys.LAST_SAVED_VOLUME, 0)
    );
    if (!didMount.current) {
      console.log("SET FROM STORAGE");
      controls.volume(
        getFromLocalStorage(Number(localStorageKeys.LAST_SAVED_VOLUME), 0) || 0
      );
    }
  }, [controls]);

  // useEffect(() => {
  //   if (didMount.current) {
  //     console.log("SET TO STORAGE");
  //     setToLocalStorage(localStorageKeys.LAST_SAVED_VOLUME, state.volume);
  //   }
  // }, [state.volume]);

  useEffect(() => {
    didMount.current = true;
  }, []);
}
