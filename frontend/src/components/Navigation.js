import React from 'react'

const Navigation = () => {
    return (
        //   Start of navigation  
        <section className="main-navigation">
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                            aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Home</a>
                        <a className="navbar-brand" href="/about">About</a>
                        <a className="navbar-brand" href="/contact">Contact</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
    
                        <div className="navbar-form navbar-right">
                            <div className="right-links">
                                <ul>
                                    <li><a href="#">Sign up</a></li>
                                    <li><a href="#">Sign in</a></li>
                                </ul>
                            </div>
    
                        </div>
                    </div>
                </div>
            </nav>
        </section>
        //  End of navigation  
    )
}

export default Navigation
