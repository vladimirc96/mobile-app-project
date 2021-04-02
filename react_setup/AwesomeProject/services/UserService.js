import MobileApi from "./MobileApi";

const url = "/users";

export const signup = (user) => {
  const config = {
    params: {
      image: user.image,
    },
  };
  return MobileApi.post(`${url}/register`, user, config);
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
}
