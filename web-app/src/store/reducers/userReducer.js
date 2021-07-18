import { USER_ACTIONS } from "../actions/user/types";

const initialState = {
	user: null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_ACTIONS.UPDATE_USER:
			return {
				...state,
				user: action.data,
			};
		case USER_ACTIONS.GET_USER_INFO:
			return {
				...state,
				user: action.data,
			};
		case USER_ACTIONS.SET_USER_INFO:
			return {
				...state,
				user: action.data,
			};
		default:
			return state;
	}
};

export default userReducer;
