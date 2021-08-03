import axios from "axios";
import Constants from "expo-constants";
import persistedStore from "../store/store";
import { logout } from "../store/actions/authentication/authenticationActions";
import * as NavigationService from "../routes/NavigationService.js";
import { Alert } from "react-native";

const { manifest } = Constants;

const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(`:`).shift().concat(`:8080`)
    : `localhost:8080`;

const Axios = axios.create({
  baseURL: "http://".concat(api),
});

const AsyncAlert = () =>
  new Promise((resolve) => {
    Alert.alert(
      "",
      "Sesija vam je istekla. Molimo Vas da se ponovo ulogujete.",
      [
        {
          text: "Ulogujte se",
          onPress: async () => {
            await persistedStore.store.dispatch(logout());
            NavigationService.navigate("Auth");
            resolve(true);
          },
        },
      ]
    );
  });

const isTokenExpired = async (token) => {
  if (!token) {
    return false;
  }
  const expirationDate = new Date(token.expiresIn);
  const todayDate = new Date();
  if (todayDate > expirationDate) {
    console.log("expired");
    const response = await AsyncAlert();
    return response;
  }
  return false;
};

Axios.interceptors.request.use(async (req) => {
  const state = persistedStore.store.getState();
  const token = state.authenticationReducer.token;
  const isExpired = await isTokenExpired(token);
  if (isExpired) {
    return req;
  }
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
