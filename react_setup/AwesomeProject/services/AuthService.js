import MobileApi from "./MobileApi";

const url = "/auth";

export const login = (credentials) => {
  return MobileApi.post(`${url}/login`, credentials);
};
