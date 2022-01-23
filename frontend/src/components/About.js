import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section className="about_container" style={{ marginTop: "60px" }}>
			<div className="ui container">
				<h1>About </h1> <hr />
				<div className="ui grid">
					<div className="eight wide column">
						<div className="ui card">
							<div className="image">
								<img
									src="https://www.mahmoudosman.com/wp-content/uploads/2021/06/mahmoud-150x150.jpg"
									alt="Mahmoud Osman"
								/>
							</div>
							<div className="content">
								<Link className="header">Mahmoud Osman</Link>
								<div className="meta">
									<span className="date">Software Engineer</span>
								</div>
								<div className="description">
									<p>
										I am a software engineer and have worked on multiple
										projects in the past that made the web more secure and
										enjoyable for end users. The most recent projects that I
										have involved in are: Angular, Spring Boot, Express, React,
										MYSQL, MongoDB where we built fully fledged applications
										that utilized both frontend and backend MVC architectural
										pattern.
									</p>
								</div>
							</div>
							<div className="extra content">
								<Link
									to="https://www.mahmoudosman.com"
									className="ui user linkify icon button purple massive"
									target="_blank"
								>
									<b>LEARN MORE</b>
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
