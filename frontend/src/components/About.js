import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="about_container" style={{marginTop:"60px"}}>
            <div className="container"> 
            <h1 className="text-danger">About</h1> <hr />
                <div className="row">
                    <div className="col-md-3">
                        <img src="https://www.mahmoudosman.com/wp-content/uploads/2021/06/mahmoud-150x150.jpg" className="img-responsive" alt="Mahmoud Osman" />
                        <h4>Mahmoud Osman</h4>
                    </div>
                    <div className="col-md-9">
                        <p>I am software engineer and have worked on multiple projects in the past that made the web more secure and enjoyable for users. The most recent projects that I have involved in are: Angular, Spring Boot, Express, React, MYSQL, MongoDB where we built full fledged applications that utilizes both frontend and backend technologies.</p>
                        <Link to="https://www.mahmoudosman.com" className="btn btn-info" target="_blank"><b>LEARN MORE</b></Link>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default About
