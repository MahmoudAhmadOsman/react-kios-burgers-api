import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
	burgerDetailsReducer,
	burgerListReducer,
} from "./reducers/burgerReducers";
// import data from "./data";

//InitialState
const InitialState = {};

// const reducer = (state, actions) => {
// 	return { burgers: data.burgers };
// };
const reducer = combineReducers({
	burgerList: burgerListReducer,
	burgerDetails: burgerDetailsReducer, //Burger details
});

//Middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	InitialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
