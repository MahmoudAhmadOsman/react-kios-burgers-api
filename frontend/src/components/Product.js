import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
	const { burger } = props;
	console.log(burger);

	return (
		<section className="product-container">
			<div className="ui card">
				<Link to={`/burger/${burger._id}`} className="ui large image">
					<img src={burger.meal_img} alt={burger.name} />
				</Link>
				<div className="content">
					<a className="header">{burger.name}</a>
					<div className="meta">
						<span className="date">
							<b>
								{" "}
								{burger._id + burger.name.substring(0, 1) + " " + "Burger"}
							</b>
						</span>
					</div>
					<div className="description">{burger.description}</div>
				</div>
				<div className="extra content">
					{/* Start of add to cart */}
					<Link to="#">
						<div className="ui left action input">
							<button className="ui button" title="Calories">
								<i className="heart outline icon"></i>
								<small className="ui heart outline icon">
									{burger.calories}{" "}
								</small>
							</button>
							<button className="ui violet icon button">
								<i className="cart icon"></i>&nbsp; Checkout
							</button>
							<button className="ui button">{burger.price}</button>
							{/* <input type="text" disabled value={burger.price} /> */}
						</div>
					</Link>
					{/* End of add to cart */}
				</div>
			</div>
		</section>
	);
};

export default Product;
