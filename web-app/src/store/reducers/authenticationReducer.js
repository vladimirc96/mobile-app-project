import { AUTHENTICATION_ACTIONS } from "../actions/authentication/types";

const initialState = {
  token: null,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION_ACTIONS.LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case AUTHENTICATION_ACTIONS.LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
  
};

export default authenticationReducer;
