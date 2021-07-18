import { AUTHENTICATION_ACTIONS_ASYNC } from "./types";

export const login = (credentials) => ({
	type: AUTHENTICATION_ACTIONS_ASYNC.LOGIN,
	credentials: credentials,
});

export const logout = () => ({
	type: AUTHENTICATION_ACTIONS_ASYNC.LOGOUT,
});
