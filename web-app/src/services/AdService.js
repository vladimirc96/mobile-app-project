import WebApi from "./WebApi";

const url = "/ads";

export const saveAd = (ad) => {
	const config = {
		headers: {
			"content-type": "multipart/form-data",
		},
	};
	return WebApi.post(`${url}`, ad, config);
};

export const getAllBySubcategoryId = (subCategoryId) => {
	const config = {
		params: {
			subCategoryId,
		},
	};
	return WebApi.get(`${url}/get-by-subcategory-id`, config);
};

export const getByUsername = (username) => {
	const config = {
		params: {
			username,
		},
	};
	return WebApi.get(`${url}/get-by-username`, config);
};
