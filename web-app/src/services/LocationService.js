import WebApi from "./WebApi";

const url = "/location";

export const getAll = () => {
  return WebApi.get(`${url}`);
};