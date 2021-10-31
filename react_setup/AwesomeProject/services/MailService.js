import MobileApi from "./MobileApi";

const url = "/mail";

export const sendMail = (mail) => {
  return MobileApi.post(`${url}`, mail);
};

