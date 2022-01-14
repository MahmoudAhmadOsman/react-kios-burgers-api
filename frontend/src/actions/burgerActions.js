import Axios from "axios";
import {
	BURGER_LIST_FAILL,
	BURGER_LIST_REQUEST,
	BURGER_LIST_SUCCESS,
} from "../constants/burgerConstants";

export const listOfBurgers = () => async (dispatch) => {
	//1. dispatch the burgers list
	dispatch({ type: BURGER_LIST_REQUEST });

	//2. check the action is successed or failled using try 7 catch
	try {
		//if request is successful, make a call to the backend api
		const { data } = await Axios.get("/api/burgers");
		dispatch({
			type: BURGER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: BURGER_LIST_FAILL,
			payload: error.message,
		});
	}
};
