import React, { useEffect, useState } from "react";
import Zoom from "react-reveal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import { detailsBurger } from "../actions/burgerActions";
// import data from "../data";
const BurgerScreen = (props) => {
	const dispatch = useDispatch();
	// const burger = data.burgers.find((x) => x._id === props.match.params.id); // display data from data.js file in frontend
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
	const [qty, stQty] = useState(1);

	// Add to cart
	const addToCartHandler = () => {
		// alert("Add to cart is clicked")
		props.history.push(`/card/${burgerId}/qty=${qty}`);
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
						<div className="row">
							<Link to="/">
								<i className="fa fa-chevron-circle-left"></i> Back
							</Link>

							<Zoom left>
								<h1 className="text-danger"> Burger Details</h1>
								<br />
							</Zoom>
							<hr />
							<div className="col-md-4">
								<img
									className="img-fluid"
									src={burger.meal_img}
									alt={burger.name}
									onClick={() => this.openModal(burger)}
								/>
								<div className="description mt-3">
									<h2>Description:</h2>
									<Zoom top>
										<p>{burger.description}</p>
									</Zoom>
								</div>
							</div>
							<div className="col-md-3">
								<h1 className="text-danger">Price: &nbsp;${burger.price}</h1>
								<p>
									<b>Quantity:</b>
								</p>
								<select name="" id="" className="form-control">
									<option value="">1</option>
									<option value="">2</option>
									<option value="">3</option>
								</select>
							</div>
							<div className="col-md-5">
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

								<button
									onClick={addToCartHandler}
									className="btn btn-success font-weight-bold btn-lg mt-5"
								>
									<Zoom right> ADD TO CART</Zoom>
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default BurgerScreen;
