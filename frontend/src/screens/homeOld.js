import React, { useEffect, useState } from "react";
import axios from "axios";
import Burger from "../components/Burger";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
// import data from "../data.json";
const HomeScreen = () => {
	// const burgerTitles = "List of Available Burgers";
	const [burgers, setBurgers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	//Fetch data from backend api, /api/burgers
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const { data } = await axios.get("/api/burgers");
				setLoading(false);
				setBurgers(data);
			} catch (err) {
				console.error(err);
				setError(err.message);
				setLoading(false);
			}
		};
		fetchData();
	}, []);

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
