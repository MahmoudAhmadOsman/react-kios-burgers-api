import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navigation = (props) => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	return (
		<section className="main-navigation">
			<nav className="navbar navbar-expand-md navbar-dark  bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							className="logo img-fluid"
							src="/assets/images/favicon.ico"
							alt="logo"
							style={{ height: "35px" }}
						/>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<ul className="navbar-nav me-auto mb-2 mb-md-0">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/">
									Burgers
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/about"
									tabIndex={-1}
									aria-disabled="true"
								>
									About
								</Link>
							</li>
						</ul>

						<div class="d-flex">
							<Link
								to="/register"
								className="btn btn-outline-info me-2"
								title="Register"
							>
								<i class="fa fa-user" aria-hidden="true"></i>
							</Link>
							<Link
								to="/signin"
								className="btn btn-outline-primary me-2"
								title="login"
							>
								<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
							</Link>
							<Link to="/cart" className="btn btn-outline-success">
								<i class="fa fa-cart-plus " aria-hidden="true"></i>
								{cartItems.length > 0 && (
									<span class="badge rounded-pill bg-danger">
										{" "}
										{cartItems.length}
									</span>
								)}
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navigation;
