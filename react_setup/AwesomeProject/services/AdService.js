import MobileApi from "./MobileApi";

const url = "/ads";

export const getAllBySubcategoryId = () => {
  return MobileApi.get(`${url}`);
};