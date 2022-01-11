import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
// import data from "../data.json";
const HomeScreen = () => {
	const burgerTitles = "List of Available Burgers";
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
			<div className="ui container" style={{ marginTop: "80px" }}>
				{loading ? (
					<Loading></Loading>
				) : error ? (
					<ErrorMessage></ErrorMessage>
				) : (
					<div className="row">
						<h1 className="ui header">{burgerTitles}</h1>
						<div className="ui three grid">
							{burgers.map((burger) => (
								<Product key={burger._id} burger={burger}></Product>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeScreen;
