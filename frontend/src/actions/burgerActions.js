import Axios from "axios";
import {
	BURGER_DETAILS_FAIL,
	BURGER_DETAILS_REQUEST,
	BURGER_DETAILS_SUCCESS,
	BURGER_LIST_FAIL,
	BURGER_LIST_REQUEST,
	BURGER_LIST_SUCCESS,
} from "../constants/burgerConstants";

export const listBurgers = () => async (dispatch) => {
	//1. dispatch the burgers's list action
	dispatch({ type: BURGER_LIST_REQUEST });

	//2. check the action if successed or not by using try & catch
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

//Get A burger but its id
