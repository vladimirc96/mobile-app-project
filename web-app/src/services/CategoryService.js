import WebApi from "./WebApi";

const url = "/categories";

export const getCategories = () => {
	return WebApi.get(`${url}`);
};
