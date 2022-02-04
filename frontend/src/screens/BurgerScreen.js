import React, { useEffect, useState } from "react";
import Zoom from "react-reveal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { detailsBurger } from "../actions/burgerActions";
// import data from "../data";
const BurgerScreen = (props) => {
	//0.
	const dispatch = useDispatch();
	//1. get burger by id
	const burgerId = props.match.params.id;
	//2. Get burger details from store.js reducer function
	const burgerDetails = useSelector((state) => state.burgerDetails);

	//3. get or extract loading, burger & error from detailsBurger action or function
	const { loading, error, burger } = burgerDetails;

	//4. dispatch the action now
	useEffect(() => {
		dispatch(detailsBurger(burgerId));
	}, [dispatch, burgerId]);

	//Set qty

	const [qty, setQty] = useState(1);

	// Add to cart
	const addToCartHandler = () => {
		props.history.push(`/cart/${burgerId}?qty=${qty}`);
	};
	return (
		<section className="burger-details">
			<div className="container">
				{loading ? (
					<Loading></Loading>
				) : error ? (
					<ErrorMessage>{error}</ErrorMessage>
				) : (
					<>
						<div className="row ">
							<Zoom left>
								<h1 className="text-danger"> Burger Details</h1>
								<br />
							</Zoom>
							<hr />
							<div className="col-md-4 border ">
								<img
									className="img-fluid"
									src={burger.meal_img}
									alt={burger.name}
								/>
								<div className="description mt-3">
									<h2>Description:</h2>
									<Zoom top>
										<p>{burger.description}</p>
									</Zoom>
								</div>
							</div>
							<div className="col-md-4 border ">
								<h1 className="text-danger ">Price: &nbsp;${burger.price}</h1>{" "}
								<br />
								<div className="d-flex">
									<h4>Quantity:</h4> &nbsp;&nbsp;
									{burger.quantity > 0 && (
										<select
											className="form-control w-25"
											value={qty}
											onChange={(e) => setQty(e.target.value)}
										>
											{[...Array(burger.quantity).keys()].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
									)}
								</div>
								<button
									onClick={addToCartHandler}
									className="btn btn-success btn-lg mt-5"
								>
									<Zoom right> ADD TO CART</Zoom>
								</button>
							</div>
							<div className="col-md-4 border ">
								<h1>{burger.name}</h1>

								<div className="table-responsive">
									<table class="table table-bordered">
										<thead>
											<tr>
												<th>Code</th>
												<th>Calories </th>
												<th>Fiber </th>
												<th>Proteim </th>
												<th>Carbs </th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													{burger._id.substring(0, 0) +
														burger.name.substring(0, 1) +
														" " +
														1}
												</td>
												<td>{burger.calories}</td>
												<td>{burger.fiber}</td>
												<td>{burger.protein}</td>
												<td>{burger.carbs}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<Link to="/" className="mt-4">
								<i className="fas fa-long-arrow-alt-left me-2" />
								Back to shop
							</Link>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default BurgerScreen;
