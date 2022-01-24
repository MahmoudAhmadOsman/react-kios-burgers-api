import React from "react";
import Zoom from "react-reveal";
import { Link } from "react-router-dom";
import data from "../data";
const BurgerScreen = (props) => {
	const burger = data.burgers.find((x) => x._id === props.match.params.id);
	// const burger = data.burgers.find(
	// 	(x) => Number(x._id) === Number(props.match.params.id)
	// );
	if (!burger) {
		return (
			<div className="ui container">
				<h1>Burder is Not Found!</h1>
			</div>
		);
	}

	return (
		<section className="burger-details">
			<div className="container">
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
						/>
						<div className="description mt-3">
							<h2>Description:</h2>
							<Zoom top>
								<p>{burger.description}</p>
							</Zoom>
						</div>
					</div>
					<div className="col-md-8">
						<h1>{burger.name}</h1>

						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>Name/Code</th>
										<th>Calories </th>
										<th>Fiber </th>
										<th>Proteim </th>
										<th>Carbs </th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											{burger.name} |{" "}
											{burger._id.substring(0, 0) +
												burger.name.substring(0, 1) +
												" " +
												burger._id +
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

						<div class="btn btn-success font-weight-bold btn-lg mt-5">
							<Zoom right> ADD TO CART</Zoom>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BurgerScreen;
