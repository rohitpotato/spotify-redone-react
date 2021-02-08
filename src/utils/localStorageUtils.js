export const getFromLocalStorage = (key, defaultValue = undefined) => {
  if (window?.localStorage) {
    return localStorage.getItem(key);
  }
  return defaultValue;
};

export const setToLocalStorage = (key, data) => {
  let toStore = data;
  if (window?.localStorage) {
    if (typeof data === "object") {
      toStore = JSON.stringify(toStore);
    }
    localStorage.setItem(key, toStore);
    return true;
  }
  return false;
};

export const removeFromLocalStorage = (key) => {
  if (window?.localStorage) {
    return localStorage.removeItem(key);
  }
  return false;
};
