import MobileApi from './MobileApi';

const url = "/users"

export const signup = (user) => MobileApi.post(`${url}/register`, user);