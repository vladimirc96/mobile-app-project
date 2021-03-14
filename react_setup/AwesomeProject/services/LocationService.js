import MobileApi from "./MobileApi";

const url = "/location";

export const getAll = () => {
  return MobileApi.get(`${url}`);
};
