import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const Product = (props) => {
	const burgerTitles = "List of Available Burgers";
	const { burgers } = props;

	return (
		<section className="product-container">
			<div className="ui container">
				<div className="row" style={{ marginTop: "80px" }}>
					<h1 className="ui header">{burgerTitles}</h1> <hr /> <br /> <br />
					<div className="ui three grid">
						{burgers.map((burger) => (
							<div key={burger._id}>
								<Zoom>
									<div className="ui card">
										<Link
											to={`/burger/${burger._id}`}
											className="ui large image"
										>
											<img src={burger.meal_img} alt={burger.name} />
										</Link>
										<div className="content">
											<Zoom left>
												{" "}
												<h1 className="header">{burger.name}</h1>
											</Zoom>
											<div className="meta">
												<span className="date">
													<b>
														{" "}
														{burger._id.substring(2, 3) +
															burger.name.substring(0, 1) +
															" " +
															"Burger"}
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
													<button className="ui button">${burger.price}</button>
												</div>
											</Link>
											{/* End of add to cart */}
										</div>
									</div>
								</Zoom>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Product;
