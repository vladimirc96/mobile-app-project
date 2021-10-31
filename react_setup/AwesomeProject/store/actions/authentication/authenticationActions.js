import { AUTHENTICATION_ACTIONS_ASYNC } from "./types";

export const login = (credentials, navigation) => ({
  type: AUTHENTICATION_ACTIONS_ASYNC.LOGIN,
  credentials: credentials,
  navigation: navigation,
});

export const logout = () => ({
  type: AUTHENTICATION_ACTIONS_ASYNC.LOGOUT,
});
