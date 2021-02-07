import LocalStorage from "../localStorage";
import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:8080",
});

Axios.interceptors.request.use((req) => {
  let user = LocalStorage.getItem("currentUser");
  if (user !== null || user !== undefined) {
    req.headers.Authorization = "Bearer " + user.accessToken;
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
    Axios.put(resource, data, requestConfig)
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
