import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";

const ProductScreen = (props) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const burgertId = props.match.params.id;
	// const { burgers } = props;
	// const { loading, error, burger } = burgertDetails;
	return (
		<section className="burgers-details" style={{ marginTop: "60px" }}>
			{Loading ? (
				<Loading></Loading>
			) : error ? (
				<ErrorMessage></ErrorMessage>
			) : (
				<div className="ui container">
					<h1 className="ui">Burger Screen</h1> <hr />
					<b>Burger ID: </b>
					{burgertId}
				</div>
			)}
		</section>
	);
};

export default ProductScreen;
