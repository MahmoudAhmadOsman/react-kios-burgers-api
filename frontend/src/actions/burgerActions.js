import Axios from "axios";
import {
	BURGER_DETAILS_FAIL,
	BURGER_DETAILS_REQUEST,
	BURGER_DETAILS_SUCCESS,
	BURGER_LIST_FAIL,
	BURGER_LIST_REQUEST,
	BURGER_LIST_SUCCESS,
} from "../constants/burgerConstants";

//listOfBurgers= listBurgers
export const listOfBurgers = () => async (dispatch) => {
	//1. dispatch the burgers's list action
	dispatch({
		type: BURGER_LIST_REQUEST,
	});
	try {
		//if request is successful, make a call to the backend api
		const { data } = await Axios.get("/api/burgers");
		dispatch({
			type: BURGER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BURGER_LIST_FAIL,
			payload: error.message,
		});
	}
};

//Burger Details action
export const detailsBurger = (burgerId) => async (dispatch) => {
	dispatch({
		type: BURGER_DETAILS_REQUEST,
		payload: burgerId,
	});

	try {
		const { data } = await Axios.get(`/api/burgers/${burgerId}`);
		dispatch({
			type: BURGER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BURGER_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
