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
