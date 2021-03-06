import { useEffect } from "react";
// import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listOfBurgers } from "../actions/burgerActions";

import Burger from "../components/Burger.js";
// import data from "../data.js";
function HomeScreen() {
	const dispatch = useDispatch();
	//1. Now, get burgers list from redux store using useSelctor hook
	const burgerList = useSelector((state) => state.burgerList);

	//2. Next, get three elements from burgerList state in burgerReducer
	const { loading, error, burgers } = burgerList;

	//3. Fetch data from redux state using useEffect hook
	useEffect(() => {
		dispatch(listOfBurgers());
	}, [dispatch]);

	return (
		<section className="home_screen">
			{loading ? (
				<Loading></Loading>
			) : error ? (
				<ErrorMessage>{error}</ErrorMessage>
			) : (
				<>
					<Burger burgers={burgers}></Burger>
				</>
			)}
		</section>
	);
}

export default HomeScreen;
