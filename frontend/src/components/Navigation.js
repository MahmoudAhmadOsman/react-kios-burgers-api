import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<section className="main-navigation">
			<nav className="navbar navbar-expand-md navbar-dark  bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						<img
							className="logo img-fluid"
							src="/assets/images/favicon.ico"
							alt="logo"
							style={{ height: "40px" }}
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

						<ul class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
							<Link class="me-3 py-2 text-white text-decoration-none" to="#">
								Cart
							</Link>
							<Link
								class="me-3 py-2 text-white text-decoration-none"
								to="/signin"
							>
								Sign in
							</Link>
							<Link class="me-3 py-2 text-white text-decoration-none" to="#">
								Sign up
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</section>
	);
};

export default Navigation;
