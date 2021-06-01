import React from 'react'
import img from '../img-ved/wg21.jpg'

export default function NewNav() {
    return (

        <div id="page">
            <nav className="fh5co-nav" role="navigation">
                <div className="container">
                    <div className="row" style={{ margin: '50px !important' }}>
                        <div className="col-xs-2">
                            <span id="fh5co-logo" ><a href="#">Login</a></span>
                            <span id="fh5co-logo"><a href="#">SignUp</a></span>
                        </div>
                        <div className="col-xs-10 text-right menu-1">
                            <ul>
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Story</a></li>
                                <li className="has-dropdown">
                                    <a href="#">Services</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Events Organizing</a></li>
                                        <li><a href="#">Photoshoot</a></li>
                                        <li><a href="#">Dream Weddings</a></li>
                                        <li><a href="#">Corporate Events</a></li>
                                    </ul>
                                </li>
                                <li className="has-dropdown">
                                    <a href="#" >Gallery</a>
                                    <ul className="dropdown">
                                        <li><a href="#">Wedding</a></li>
                                        <li><a href="#">Birtdays</a></li>
                                        <li><a href="#">Buiseness</a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >
            <header id="fh5co-header" class="fh5co-cover" role="banner" >
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center">
                                <div className="display-t">
                                    <div className="display-tc animate-box" data-animate-effect="fadeIn">
                                        <h1>Event Management &amp; Planning</h1>
                                        <h2>A goal without a plan is just a goal</h2>
                                        <div class="simply-countdown simply-countdown-one"></div>
                                        <p><a href="#" class="btn btn-default btn-sm">Save your memories</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    )
}
