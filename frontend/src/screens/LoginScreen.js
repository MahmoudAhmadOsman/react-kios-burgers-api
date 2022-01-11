import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
	return (
		<section className="login-container" style={{ marginTop: "60px" }}>
			<div className="ui container">
				<div className="ui middle aligned center aligned grid">
					<div className="five wide column">
						<h2 className="ui teal image header">
							<img src="assets/images/favicon.ico" className="image" />
							{/* <div className="content">
        SIGN IN
      </div> */}
						</h2>
						<form className="ui large form">
							<div className="ui stacked segment">
								<div className="field">
									<div className="ui left icon input">
										<i className="user icon"></i>
										<input
											type="text"
											name="email"
											placeholder="E-mail address"
										/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"></i>
										<input
											type="password"
											name="password"
											placeholder="Password"
										/>
									</div>
								</div>
								<div className="ui fluid large teal submit button">Login</div>
							</div>

							<div className="ui error message"></div>
						</form>

						<div className="ui message">
							New to us? <Link to="#">Sign Up</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginScreen;
