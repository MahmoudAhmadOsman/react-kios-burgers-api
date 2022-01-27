import {
	BURGER_DETAILS_FAIL,
	BURGER_DETAILS_REQUEST,
	BURGER_DETAILS_SUCCESS,
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

//2. Burger Details reducer
export const burgerDetailsReducer = (
	state = { burger: {}, loading: true },
	action
) => {
	switch (action.type) {
		case BURGER_DETAILS_REQUEST:
			return { loading: true };

		case BURGER_DETAILS_SUCCESS:
			return {
				loading: false,
				burger: action.payload,
			};

		case BURGER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
