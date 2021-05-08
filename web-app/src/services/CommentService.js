import WebApi from "./WebApi";

const url = "/ratings";

export const getCommentsByUsername = (username) => {
  const config = {
    params: {
      username,
    },
  };
  return WebApi.get(`${url}/get-by-username`, config);
};