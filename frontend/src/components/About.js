import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about_container" style={{ marginTop: "60px" }}>
      <div className="ui container">
        <h1>About </h1> <div className="ui divider"></div>
      <div class="ui grid">
      <div class="eight wide column">
                <div class="ui card">
                <div class="image">
                    <img src="https://www.mahmoudosman.com/wp-content/uploads/2021/06/mahmoud-150x150.jpg" />
                </div>
                <div class="content">
                    <a class="header">Mahmoud Osman</a>
                    <div class="meta">
                    <span class="date">Software Engineer</span>
                    </div>
                    <div class="description">
                    <p>
                        I am software engineer and have worked on multiple projects in
                        the past that made the web more secure and enjoyable for users.
                        The most recent projects that I have involved in are: Angular,
                        Spring Boot, Express, React, MYSQL, MongoDB where we built full
                        fledged applications that utilizes both frontend and backend
                        technologies.
                    </p>
                    </div>
                </div>
                <div class="extra content">
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
