import WebApi from "./WebApi";

const url = "/sub-categories";

export const getAllByCategoryId = (categoryId) => {
	const config = {
		params: {
			categoryId,
		},
	};
	return WebApi.get(`${url}/get-by-category-id`, config);
};
