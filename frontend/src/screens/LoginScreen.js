import React from "react";
const LoginScreen = () => {
	return (
		<section className="login-screen">
			<div className="container">
				<div className="row mt-4">
					<div className="col-md-4 mx-auto">
						<div className="card rounded-0">
							<img
								src="https://source.unsplash.com/1600x900/?lock"
								className="card-img-top img-fluid"
								alt="login"
							/>
							<div class="card-body">
								<h2 className="card-title">Login</h2> <hr />
								<p className="card-text">
									<form class="mb-3 circle">
										<div className="form-group">
											<label for="email" class="form-label">
												Email address
											</label>
											<input
												type="email"
												className="form-control form-control-lg"
												id="email"
												placeholder="Your email"
											/>
										</div>
										<div className="form-group">
											<label for="password" className="form-label">
												Password
											</label>
											<input
												type="password"
												className="form-control form-control-lg"
												id="password"
												placeholder="Your password"
											/>
										</div>
										<button className="btn btn-success mt-4 btn-lg">
											LOGIN
										</button>
									</form>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginScreen;
