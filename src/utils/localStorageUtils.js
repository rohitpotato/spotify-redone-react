export const getFromLocalStorage = (key, defaultValue = undefined) => {
  if (window?.localStorage) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return defaultValue;
    }
  }
  return defaultValue;
};

export const setToLocalStorage = (key, data) => {
  let toStore = data;
  if (window?.localStorage) {
    try {
      if (typeof data === "object") {
        toStore = JSON.stringify(toStore);
      }
      localStorage.setItem(key, toStore);
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
};
