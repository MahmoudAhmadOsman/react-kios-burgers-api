import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import ErrorMessage from "../components/ErrorMessage";

function CartScreen(props) {
	//1. Get cart id
	const burgerId = props.match.params.id;

	//2. Check the quantity
	const qty = props.location.search
		? Number(props.location.search.split("=")[1])
		: 1;

	//5. get cart item from redux store
	const cart = useSelector((state) => state.cart);

	const { cartItems } = cart;

	//3. define dispatch 1st
	const dispatch = useDispatch();

	////4. dispatch action using useEffect hook
	useEffect(() => {
		if (burgerId) {
			dispatch(addToCart(burgerId, qty)); // define dispatch first
		}
	}, [dispatch, burgerId, qty]);

	return (
		<section className="cart-screen">
			<div className="container mt-4">
				{cartItems.length === 0 ? (
					<ErrorMessage>
						Your Cart is empty.
						<Link to="/"> Continue Shopping...</Link>
					</ErrorMessage>
				) : (
					<div>
						{cartItems.map((item) => (
							<div
								className="container h-100 h-custom"
								style={{ backgroundColor: "#d2c9ff" }}
							>
								<div className="row py-5 h-100">
									<div className="row d-flex justify-content-center align-items-center h-100">
										<div className="col-12">
											<div
												className="card card-registration card-registration-2"
												style={{ borderRadius: "15px" }}
											>
												<div className="card-body p-0">
													<div className="row g-0">
														<div className="col-lg-8">
															<div className="p-5">
																<div className="d-flex justify-content-between align-items-center mb-5">
																	<h1 className="fw-bold mb-0 text-black">
																		Shopping Cart
																	</h1>
																	<h6 className="mb-0 text-muted">
																		{cartItems.length}
																	</h6>
																</div>
																<hr className="my-4" />
																<div className="row mb-4 d-flex justify-content-between align-items-center">
																	<div className="col-md-2 col-lg-2 col-xl-2">
																		<img
																			src={item.meal_img}
																			className="img-fluid rounded-3"
																			alt={item.name}
																		/>
																	</div>
																	<div className="col-md-3 col-lg-3 col-xl-3">
																		<h6 className="text-muted">{item.name}</h6>
																		<p className="text-black mb-0">
																			{item.description.substring(0, 80) +
																				"..."}
																		</p>
																	</div>
																	<div className="col-md-3 col-lg-3 col-xl-2 d-flex">
																		<button
																			className="btn btn-link px-2"
																			onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
																		>
																			<i className="fas fa-minus" />
																		</button>
																		<input
																			id="form1"
																			min={0}
																			name="quantity"
																			defaultValue={1}
																			type="number"
																			className="form-control form-control-sm"
																		/>
																		<button className="btn btn-link px-2">
																			<i className="fas fa-plus" />
																		</button>
																	</div>
																	<div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
																		<h6 className="mb-0">${item.price}</h6>
																	</div>
																	<div className="col-md-1 col-lg-1 col-xl-1 text-end">
																		<Link to="#!" className="text-muted">
																			<i className="fas fa-times" />
																		</Link>
																	</div>
																</div>
																<hr className="my-4" />

																<div className="pt-5">
																	<h6 className="mb-0">
																		<Link
																			to={`/burger/${burgerId}`}
																			className="text-body"
																		>
																			<i className="fas fa-long-arrow-alt-left me-2" />
																			Back to shop
																		</Link>
																	</h6>
																</div>
															</div>
														</div>
														<div className="col-lg-4 bg-grey">
															<div className="p-5">
																<h3 className="fw-bold mb-5 mt-2 pt-1">
																	Summary
																</h3>
																<hr className="my-4" />
																<div className="d-flex justify-content-between mb-4">
																	<h5 className="text-uppercase">
																		{item.name}
																	</h5>
																	<h5 className="text-danger">${item.price}</h5>
																</div>

																<hr className="my-4" />
																<div className="d-flex justify-content-between mb-5">
																	<h5 className="text-uppercase">
																		Total price
																	</h5>
																	<h5>${item.price}</h5>
																</div>
																<button
																	type="button"
																	className="btn btn-success btn-block btn-lg"
																	data-mdb-ripple-color="dark"
																>
																	PLACE ORDER
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default CartScreen;
