import React from "react";

function PaymentScreen() {
	return (
		<section className="OrderScreen">
			<div className="container">
				<h1 className="text-danger">Payment Details</h1> <hr />
				<form method="POST">
					<div className="row">
						<div className="col-md-6">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="First name"
								name="firstName"
							/>
						</div>
						<div className="col-md-6">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Last Name"
								name="lastName"
							/>
						</div>
					</div>{" "}
				</form>
			</div>
		</section>
	);
}

export default PaymentScreen;
