import React from "react";

function PaymentScreen() {
	return (
		<section className="OrderScreen">
			<div className="container">
				<h1 className="text-danger">Payment Details</h1> <hr />
				<div className="row">
					<div className="col-md-6">left Colum</div>
					<div className="col-md-6">
						<form method="POST">
							<div className="box-2">
								<div className="box-inner-2">
									<div>
										<h3 className="fw-bold">Payment Details</h3>
										<p className="dis mb-3">
											Complete your purchase by providing your payment details
										</p>
									</div>
									<form action>
										<div className="mb-3">
											<p className="dis fw-bold mb-2">Email address</p>{" "}
											<input
												className="form-control form-control-lg"
												type="email"
												placeholder="Email address"
											/>
										</div>
										<div>
											<p className="dis fw-bold mb-2">Card Number</p>
											<div className="d-flex align-items-center justify-content-between card-atm border rounded">
												<div className="fab fa-cc-visa ps-3  form-control-lg" />{" "}
												<input
													type="number"
													className="form-control form-control-lg"
													placeholder="Enter card number"
												/>
												<div className="d-flex w-50">
													<input
														type="number"
														className="form-control form-control-lg px-0"
														placeholder="MM/YY"
													/>{" "}
													<input
														type="password"
														maxLength={3}
														className="form-control form-control-lg px-0"
														placeholder="CVV"
													/>{" "}
												</div>
											</div>
											<div className="my-3 cardname">
												<p className="dis fw-bold mb-2">Cardholder name</p>{" "}
												<input
													type="text"
													className="form-control form-control-lg"
													placeholder="Enter your full name"
												/>
											</div>
											<div className="address">
												<p className="dis fw-bold mb-3">Billing address</p>{" "}
												<input
													type="text"
													className="form-control form-control-lg mb-2"
													placeholder="Billing address"
													name="address"
												/>
												<div className="d-flex">
													<input
														className="form-control form-control-lg"
														type="number"
														placeholder="Postal Code"
													/>{" "}
													<input
														className="form-control form-control-lg state "
														type="text"
														placeholder="State"
														maxLength="2"
													/>{" "}
												</div>
												<div className="d-flex flex-column dis">
													<div className="d-flex align-items-center justify-content-between mb-2">
														<p className="fw-bold">Total</p>
														<h2 className="fw-bold mt-3">
															<span className="fas fa-dollar-sign" />
															35.80
														</h2>
													</div>
													<div className="btn btn-success btn-lg mt-2">
														PLACE ORDER
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PaymentScreen;
