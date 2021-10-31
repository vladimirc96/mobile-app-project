import MobileApi from "./MobileApi";

const url = "/sub-categories";

export const getAllByCategoryId = (categoryId) => {
  const config = {
    params: {
      categoryId,
    },
  };
  return MobileApi.get(`${url}/get-by-category-id`, config);
};
