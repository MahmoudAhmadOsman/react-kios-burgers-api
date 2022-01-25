import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

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
		dispatch(burgerList);
	}, [dispatch]);

	// const [burgers, setBurgers] = useState([]);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(false);

	// useEffect(() => {
	// 	const fecthData = async () => {
	// 		try {
	// 			setLoading(true);
	// 			const { data } = await axios.get("/api/burgers");
	// 			setLoading(false);
	// 			setBurgers(data);
	// 		} catch (error) {
	// 			setError(error.message);
	// 			setLoading(false);
	// 		}
	// 	};
	// 	fecthData();
	// }, []);
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
			{/* <section className="burger-container">
			{data.burgers.map((burger) => (
				<Burger key={burger._id} burger={burger}></Burger>
			))}
			<Burger burgers={burgers}></Burger>
		</section> */}
		</section>
	);
}

export default HomeScreen;
