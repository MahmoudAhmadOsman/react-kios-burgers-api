import React, { useEffect } from "react";
import Burger from "../components/Burger";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { listBurgers } from "../actions/burgerActions";
import { useDispatch, useSelector } from "react-redux";
// import data from "../data.json";
const HomeScreen = () => {
	const dispatch = useDispatch();
	//1. Now, get burgers list from redux store using useSelctor hook
	const burgerList = useSelector((state) => state.burgerList);

	//2. Next, get three elements from burgerList state
	const { loading, error, burgers } = burgerList;

	//Fetch data from backend api, /api/burgers
	useEffect(() => {
		//3. Dispatch the list of burges here
		dispatch(listBurgers());
	}, [dispatch]);

	return (
		<section className="home_screen">
			{loading ? (
				<Loading></Loading>
			) : error ? (
				<ErrorMessage></ErrorMessage>
			) : (
				<>
					<Burger burgers={burgers}></Burger>
				</>
			)}
		</section>
	);
};

export default HomeScreen;
