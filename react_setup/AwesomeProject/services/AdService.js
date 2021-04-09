import MobileApi from "./MobileApi";

const url = "/ads";

export const saveAd = (ad) => {
  return MobileApi.post(`${url}`, ad);
};
