import MobileApi from "./MobileApi";

const url = "/ads";

export const saveAd = (ad) => {
  return MobileApi.post(`${url}`, ad);
};

export const getAllBySubcategoryId = (subCategoryId) => {
  const config = {
    params: {
      subCategoryId,
    },
  };
  return MobileApi.get(`${url}/get-by-subcategory-id`, config);
};

export const getByUsername = (username) => {
  const config = {
    params: {
      username,
    },
  };
  return MobileApi.get(`${url}/get-by-username`, config);
};

export const updateAd = (ad) => {
  return MobileApi.put(`${url}`, ad);
};

export const deleteAdById = (id) => {
  return MobileApi.put(`${url}/${id}`);
};
