import MobileApi from "./MobileApi";

const url = "/ratings";

export const getCommentsByUsername = (username) => {
  const config = {
    params: {
      username,
    },
  };
  return MobileApi.get(`${url}/get-by-username`, config);
};