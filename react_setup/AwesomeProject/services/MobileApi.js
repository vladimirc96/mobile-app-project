import axios from "axios";
import Constants from "expo-constants";
import persistedStore from "../store/store";
import { showPopup, customButton } from "../shared/AlertPopup";
import { logout } from "../store/actions/authentication/authenticationActions";
import jwt_decode from "jwt-decode";

const { manifest } = Constants;

const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
    : `localhost:8080`;

const Axios = axios.create({
  baseURL: "http://".concat(api),
});

const redirectLogin = () => {
  persistedStore.dispatch(logout());
};

Axios.interceptors.request.use((req) => {
  const state = persistedStore.store.getState();
  const token = state.authenticationReducer.token;

  // const decoded = jwt_decode(token);
  // const dateNow = new Date();

  // if (decoded.exp < dateNow.getTime()) {
  //   const buttons = [customButton("Prijavi se", redirectLogin)];
  //   showPopup(
  //     "",
  //     "Sesija vam je istekla. Potrebno je da se prijavite ponovo kako bi mogli da nastavite korišćenje aplikacije.",
  //     buttons
  //   );
  //   return;
  // }

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
