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
											<p className="dis fw-bold mb-2">Card details</p>
											<div className="d-flex align-items-center justify-content-between card-atm border rounded">
												<div className="fab fa-cc-visa ps-3  form-control-lg" />{" "}
												<input
													type="text"
													className="form-control form-control-lg"
													placeholder="Card Details"
												/>
												<div className="d-flex w-50">
													{" "}
													<input
														type="text"
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
													className="form-control form-control-lg"
													type="text"
												/>
											</div>
											<div className="address">
												<p className="dis fw-bold mb-3">Billing address</p>{" "}
												<select
													className="form-select form-control form-control-lg"
													aria-label="Default select example"
												>
													<option selected hidden>
														State
													</option>
													<option value={1}>MN</option>
													<option value={2}>TX</option>
													<option value={3}>VT</option>
												</select>
												<div className="d-flex">
													{" "}
													<input
														className="form-control form-control-lg"
														type="text"
														placeholder="Zip Code"
													/>{" "}
													<input
														className="form-control form-control-lg state"
														type="text"
														placeholder="State"
													/>{" "}
												</div>
												{/* <div className=" my-3">
													<p className="dis fw-bold mb-2">VAT Number</p>
													<div className="inputWithcheck">
														{" "}
														<input
															className="form-control"
															type="text"
															defaultValue="GB012345B9"
														/>{" "}
														<span className="fas fa-check" />{" "}
													</div>
												</div> */}
												<div className="d-flex flex-column dis">
													{/* <div className="d-flex align-items-center justify-content-between mb-2">
														<p>Subtotal</p>
														<p>
															<span className="fas fa-dollar-sign" />
															33.00
														</p>
													</div> 
													<div className="d-flex align-items-center justify-content-between mb-2">
														<p>
															VAT<span>(20%)</span>
														</p>
														<p>
															<span className="fas fa-dollar-sign" />
															2.80
														</p>
													</div>*/}{" "}
													<br />
													<div className="d-flex align-items-center justify-content-between mb-2">
														<p className="fw-bold">Total</p>
														<h2 className="fw-bold">
															<span className="fas fa-dollar-sign" />
															35.80
														</h2>
													</div>
													<div className="btn btn-success btn-lg mt-2">
														PLACE ORDER
														{/* <span className="fas fa-dollar-sign px-1" /> */}
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
