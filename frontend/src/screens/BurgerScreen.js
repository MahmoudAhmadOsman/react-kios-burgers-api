import React from "react";
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
		<section className="burger-details" style={{ marginTop: "80px" }}>
			<div className="container">
				<div className="row">
					<Link to="/">
						<i className="fa fa-chevron-circle-left"></i> Back
					</Link>
					<h1 className="text-danger"> Burger Details</h1> <hr /> <br /> <br />
					<div className="col-md-4">
						<img
							className="img-fluid"
							src={burger.meal_img}
							alt={burger.name}
						/>
						<div className="description mt-3">
							<h2>Description:</h2>
							<p>{burger.description}</p>
						</div>
					</div>
					<div className="col-md-8">
						<h1>{burger.name}</h1>

						<div class="table-responsive">
							<table class="table table-bordered">
								<thead>
									<tr>
										<th>Calories </th>
										<th>Fiber </th>
										<th>Proteim </th>
										<th>Carbs </th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{burger.calories}</td>
										<td>{burger.fiber}</td>
										<td>{burger.protein}</td>
										<td>{burger.carbs}</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div class="btn btn-success font-weight-bold btn-lg mt-5">
							ADD TO CART
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BurgerScreen;
