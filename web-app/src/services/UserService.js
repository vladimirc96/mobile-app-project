import WebApi from "./WebApi";

const url = "/users";

export const signup = (user) => {
	return WebApi.post(`${url}/register`, user);
};

export const getUserInfo = (username) => {
	const config = {
		params: {
			username,
		},
	};
	return WebApi.get(`${url}/user-info`, config);
};

export const saveUser = (user) => {
	return WebApi.put(`${url}`, user);
};

export const getUser = () => {
	return WebApi.get(`${url}`);
};

export const forgotPassword = (email) => {
	const config = {
		params: {
			email,
		},
	};
	return WebApi.post(`${url}/reset-password`, null, config);
};

export const savePassword = (dto) => {
	return WebApi.put(`${url}/save-password`, dto);
};
