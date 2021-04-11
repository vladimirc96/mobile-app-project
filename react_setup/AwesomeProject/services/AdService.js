import MobileApi from "./MobileApi";

const url = "/ads";

export const saveAd = (ad) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  return MobileApi.post(`${url}`, ad, config);
};

export const getAllBySubcategoryId = () => {
  return MobileApi.get(`${url}`);
};
