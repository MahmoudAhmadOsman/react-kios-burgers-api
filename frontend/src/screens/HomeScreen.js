import React, { useState } from "react";
import Product from "../components/Product";
import data from "../data.json";
const HomeScreen = () => {
	const burgerTitles = "List of Available Burgers";
	return (
		<section className="home_screen">
			<div className="ui container" style={{ marginTop: "80px" }}>
				<div className="row">
					<h1 className="ui header">{burgerTitles}</h1>
					<div className="ui three grid">
						{data.burgers.map((burger) => (
							<Product key={burger._id} burger={burger}></Product>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeScreen;
