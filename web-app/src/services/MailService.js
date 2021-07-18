import WebApi from "./WebApi";

const url = "/mail";

export const sendMail = (mail) => {
	return WebApi.post(`${url}`, mail);
};
