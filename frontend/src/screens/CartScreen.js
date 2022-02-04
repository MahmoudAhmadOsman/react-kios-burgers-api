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
	<section className="cart-items">
		<div className="container mt-3">
			<div className="shopping-bag">
				<h1 className="text-danger">Shopping Cart</h1>

				<hr />
			</div>
			{cartItems.length === 0 ? (
				<ErrorMessage>
					Your Cart is empty.
					<Link to="/"> Continue Shopping...</Link>
				</ErrorMessage>
			) : (
				<div>
					{cartItems.map((item) => (
						<div className="row">
							<div className="col-md-3" key={item.burger}>
								<img
									src={item.meal_img}
									alt={item.name}
									className="img-fluid rounded-circle mb-2"
									style={{ width: "200px", height: "200px" }}
								/>
							</div>
							<div className="col-md-3">
								<Link to={`/burger/${item.burger}`}>
									<h2>{item.name}</h2>
								</Link>
								<h3 className="text-muted">${item.price}</h3>
							</div>
							<div className="col-md-3">
								<select
									className="form-control"
									style={{ width: "60px" }}
									value={item.qty}
									onChange={(e) =>
										dispatch(addToCart(item.burger, Number(e.target.value)))
									}
								>
									{[...Array(item.quantity).keys()].map((x) => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</div>
							<div className="col-md-3 mb-4">
								<button type="button" className="btn btn-outline-danger">
									<i className="fa fa-trash"></i>
								</button>
							</div>
						</div>
					))}
					<hr />
					<div className="row">
						<div className="col-md-8 mt-5">
							<Link to={`/burger/${burgerId}`} className="text-body">
								<i className="fas fa-long-arrow-alt-left me-2" />
								Back to shop
							</Link>
						</div>
						<div className="col-md-4">
							<h3 className="text-primary">
								Cart Items: ({cartItems.reduce((a, c) => a + c.qty, 0)} items){" "}
								<br />
								<small className="text-muted">
									Total:{" "}
									<span className="text-danger">
										${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
									</span>
								</small>
							</h3>

							<button
								type="button"
								className="btn btn-outline-success btn-block btn-lg mt-4"
								disabled={cartItems.length === 0}
							>
								Proceed to Checkout
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	</section>
);
}
export default CartScreen;
