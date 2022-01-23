import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import data from "../data.js";
const Burger = (props) => {
	const burgerTitles = "List of  Burgers";
	const { burgers } = props;
	console.log(props);

	return (
		<section className="product-container">
			<div className="container">
				<Zoom>
					<div className="row">
						<h1 className="text-danger">{burgerTitles}</h1> <hr /> <br /> <br />
						{burgers.map((burger) => (
							<div className="col-md-4">
								<div class="card" key={burger._id}>
									<Link to={`/burger/${burger._id}`}>
										<img
											class="card-img-top"
											src={burger.meal_img}
											alt={burger.name}
										/>
									</Link>

									<div class="card-body">
										<Zoom left>
											<h5 class="card-title">
												{burger.name} |{" "}
												<b>
													{" "}
													{burger._id.substring(2, 3) +
														burger.name.substring(0, 1) +
														" " +
														burger._id +
														1}
												</b>
											</h5>
										</Zoom>
										<p class="card-text">{burger.description}</p>

										<button
											type="button"
											class="btn btn-light position-relative"
										>
											Calories
											<span
												class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success"
												title="Calories"
											>
												{burger.calories}
											</span>
										</button>

										<button
											type="button"
											class="btn btn-danger float-end"
											disabled
										>
											${burger.price}
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</Zoom>
			</div>
		</section>
	);
};

export default Burger;
