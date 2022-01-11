import { Link } from "react-router-dom";
const Navigation = () => {
	return (
		<section className="main-navigation">
			<div className="ui fixed inverted menu">
				<div className="ui container">
					<Link to="/" className="header item">
						<img className="logo" src="assets/images/favicon.ico" alt="logo" />{" "}
						&nbsp; KIOS
					</Link>
					<Link to="/" className="item">
						Home
					</Link>
					<Link to="/" className="item">
						Burgers
					</Link>
					<div className="ui simple dropdown item">
						Services <i className="dropdown icon"></i>
						<div className="menu">
							<Link className="item" to="#">
								Burgers
							</Link>
							<Link className="item" to="#">
								Sandwitches
							</Link>
							<div className="divider"></div>
							<div className="header">Drinks</div>
							<div className="item">
								<i className="dropdown icon"></i>
								Sweet drinks
								<div className="menu">
									<Link className="item" to="#">
										Sweet Orion
									</Link>
									<Link className="item" to="#">
										Sweet & Banana
									</Link>
								</div>
							</div>
							<Link className="item" to="#">
								Oragan & Orio
							</Link>
						</div>
					</div>
					<Link to="/about" className="item">
						About
					</Link>
					<Link to="/" className="item">
						Contact
					</Link>
					<div className="right item">
						<Link to="/login" className="ui inverted button">
							Log in
						</Link>
						<Link to="#" className="ui inverted button">
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navigation;
