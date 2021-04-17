import MobileApi from "./MobileApi";

const url = "/users";

export const signup = (user) => {
  return MobileApi.post(`${url}/register`, user);
};

export const getUserInfo = (username) => {
  const config = {
    params: {
      username,
    },
  };
  return MobileApi.get(`${url}/user-info`, config);
};

export const saveUser = (user) => {
  return MobileApi.put(`${url}`, user);
};

export const getUser = () => {
  return MobileApi.get(`${url}`);
};
