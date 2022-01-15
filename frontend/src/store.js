import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
// import data from "./data";
import { burgerListReducer } from "./reducers/burgerReducers";

//InitialState
const InitialState = {};

const reducer = combineReducers({
	burgerList: burgerListReducer,
});
// const reducer = (state, action) => {
// 	return { burgers: data.burgers };
// };

//Middleware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	InitialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
