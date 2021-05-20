import axios from "axios";
import Constants from "expo-constants";
import persistedStore from "../store/store";

const { manifest } = Constants;

const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
    : `localhost:8080`;

const Axios = axios.create({
  baseURL: "http://d02eb6c9f0b2.ngrok.io",
});

Axios.interceptors.request.use((req) => {
  const state = persistedStore.store.getState();
  const token = state.authenticationReducer.token;
  if (token !== null && token !== undefined) {
    req.headers.Authorization = "Bearer " + token.accessToken;
  }
  return req;
});

const MobileApi = {
  get: (resource, requestConfig) => {
    return Axios.get(resource, requestConfig)
      .then((response) => response.data)
      .catch(
        (err) =>
          new Promise(() => {
            throw err.response.data;
          })
      );
  },

  post: (resource, data, requestConfig) => {
    return Axios.post(resource, data, requestConfig)
      .then((response) => response.data)
      .catch(
        (err) =>
          new Promise(() => {
            throw err.response.data;
          })
      );
  },

  put: (resource, data, requestConfig) => {
    return Axios.put(resource, data, requestConfig)
      .then((response) => response.data)
      .catch(
        (err) =>
          new Promise(() => {
            throw err.response.data;
          })
      );
  },

  delete: (resource, payload) => {
    let params;
    if (payload !== undefined) {
      params = payload;
    }
    return Axios.delete(resource, params)
      .then((response) => response.data)
      .catch(
        (err) =>
          new Promise(() => {
            throw err.response.data;
          })
      );
  },
};

export default MobileApi;
