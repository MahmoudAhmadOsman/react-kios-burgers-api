import Axios from "axios";
import {
	BURGER_LIST_FAIL,
	BURGER_LIST_REQUEST,
	BURGER_LIST_SUCCESS,
} from "../constants/burgerConstants";

export const listBurgers = () => async (dispatch) => {
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
