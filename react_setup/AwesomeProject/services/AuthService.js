import MobileApi from "./MobileApi";

const url = "/auth";

export const login = (user) => {
  return MobileApi.post(`${url}/login`, user);
};
