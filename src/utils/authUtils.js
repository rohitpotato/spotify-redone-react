import request from "./axiosClient";

export const getTokenFromUrl = () => {
  const hashParams = {};
  let e = "";
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  // eslint-disable-next-line no-cond-assign
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }

  if (hashParams.access_token) {
    return hashParams.access_token;
  }

  return false;
};

export const isTokenValid = (date) => {
  const HOUR = 1000 * 60 * 60;
  const anHourAgo = Date.now() - HOUR;
  return date > anHourAgo;
};

export const setAxiosHeaders = (token) => {
  request.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAxiosAuthHeader = () => {
  delete request.defaults.headers.common.Authorization;
};
