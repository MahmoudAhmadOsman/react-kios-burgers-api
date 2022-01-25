import {
	BURGER_LIST_FAIL,
	BURGER_LIST_REQUEST,
	BURGER_LIST_SUCCESS,
} from "../constants/burgerConstants";

//1. Burger reducer list
export const burgerListReducer = (
	state = { loading: true, burgers: [] },
	action
) => {
	switch (action.type) {
		case BURGER_LIST_REQUEST:
			return { loading: true };

		case BURGER_LIST_SUCCESS:
			return {
				loading: false,
				burgers: action.payload,
			};

		case BURGER_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
