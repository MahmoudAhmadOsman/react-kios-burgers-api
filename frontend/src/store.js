import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
	burgerDetailsReducer,
	burgerListReducer,
} from "./reducers/burgerReducers";
import { cartReducer } from "./reducers/cartReducers";

// import data from "./data";

//InitialState
const InitialState = {
	//Save cart items in localStorage even after page is refreshed
	cart: {
		cartItems: localStorage.getItem("cartItems")
			? JSON.parse(localStorage.getItem("cartItems"))
			: [],
	},
};

// const reducer = (state, actions) => {
// 	return { burgers: data.burgers };
// };
const reducer = combineReducers({
	burgerList: burgerListReducer,
	burgerDetails: burgerDetailsReducer, //Burger details reducer
	cart: cartReducer,
});

//Middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	InitialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
