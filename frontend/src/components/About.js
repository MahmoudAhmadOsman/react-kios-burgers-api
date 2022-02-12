import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="about_container">
			<div className="container">
				<div className="row">
					{" "}
					<h1 className="text-success">About </h1> <hr />
					<div className="col-md-6">
						<div className="card">
							<img
								src="https://www.mahmoudosman.com/wp-content/uploads/2021/06/mahmoud-150x150.jpg"
								alt="Mahmoud Osman"
								className="img-circled"
							/>
							<div className="card-body">
								<h5 className="card-title">Software Engineer</h5>
								<p className="card-text">
									I am a software engineer and have worked on multiple projects
									in the past that made the web more secure and enjoyable for
									end users. The most recent projects that I have involved in
									are: Angular, Spring Boot, Express, React, MYSQL, MongoDB
									where we built fully fledged applications that utilized both
									frontend and backend MVC architectural pattern.
								</p>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">BS - Computer Science </li>
								<li className="list-group-item">
									AS - Computer Sytems Management
								</li>
								<li className="list-group-item">
									Certs: PHP, Web Design & Development
								</li>
							</ul>
							<div className="card-body">
								<Link to="https://www.mahmoudosman.com" className="card-link">
									My wesbite
								</Link>
								<Link
									to="https://www.linkedin.com/in/mahmoudaosman/"
									className="card-link"
								>
									LinkedIn
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
