import WebApi from "./WebApi";

const url = "/auth";

export const login = (credentials) => {
  return WebApi.post(`${url}/login`, credentials);
};

export const logout = () => {
  return WebApi.post(`${url}/logout`);
};
