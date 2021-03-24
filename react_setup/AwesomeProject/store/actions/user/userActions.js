import { USER_ACTIONS_ASYNC } from "./types";

export const updateUser = (user) => ({
  type: USER_ACTIONS_ASYNC.UPDATE_USER,
  data: user,
});

export const getUserInfo = () => ({
  type: USER_ACTIONS_ASYNC.GET_USER_INFO,
});
