import { SUBCATEGORY_ACTIONS } from "./types";

export const updateSelectedSubcategory = (subcategory) => ({
	type: SUBCATEGORY_ACTIONS.UPDATE_SELECTED_SUBCATEGORY,
	data: subcategory
});

export const getSelectedSubcategory = () => ({
	type: SUBCATEGORY_ACTIONS.GET_SELECTED_SUBCATEGORY
});
