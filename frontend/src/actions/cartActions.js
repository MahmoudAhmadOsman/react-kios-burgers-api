import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (burgerId, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/burgers/${burgerId}`);

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			name: data.name,
			meal_img: data.meal_img,
			quantity: data.quantity,
			price: data.price,
			description: data.description,
			calories: data.calories,
			fiber: data.fiber,
			protein: data.protein,
			carbs: data.carbs,
			burger: data._id,
			qty,
		},
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
