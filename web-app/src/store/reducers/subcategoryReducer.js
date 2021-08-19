import { SUBCATEGORY_ACTIONS } from "../actions/subcategory/types";

const initialState = {
	selectedSubcategory: null,
};

const subcategoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUBCATEGORY_ACTIONS.UPDATE_SELECTED_SUBCATEGORY:
			return {
				...state,
				selectedSubcategory: action.data,
			};
		case SUBCATEGORY_ACTIONS.GET_SELECTED_SUBCATEGORY:
			return {
				...state,
				selectedSubcategory: action.data,
			};
		default:
			return state;
	}
};

export default subcategoryReducer;