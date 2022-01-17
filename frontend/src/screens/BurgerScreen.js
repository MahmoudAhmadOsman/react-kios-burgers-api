import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { detailsBurger } from "../actions/burgerActions";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = (props) => {
	//5. define the dispatch hook
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	//1. get burger Id
	const burgerId = props.match.params.id;

	//2. use useSelector & get burger details from store

	//3. get loading, error & burger from burgerDetailsReducer reducer

	//4. use useEffect(() => {},[]) hook & dispatch the dispatch hook & burgerId

	return (
		<section className="burgers-details" style={{ marginTop: "60px" }}>
			{loading ? (
				<Loading></Loading>
			) : error ? (
				<ErrorMessage></ErrorMessage>
			) : (
				<div className="ui container">
					<h1 className="ui">Burger Screen</h1> <hr />
					<b>Burger ID: </b> {burgerId}
				</div>
			)}
		</section>
	);
};

export default ProductScreen;
