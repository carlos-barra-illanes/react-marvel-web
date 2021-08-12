import React, { Component } from 'react';
import '../assets/css/media_query.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.css';
import '../assets/css/owl.theme.default.css';
import '../assets/css/style_1.css';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';
class NavBar extends Component {

    render() {
        return (
            <div className="container-fluid bg-faded fh5co_padd_mediya padding_786 navbar-toggleable-md-mobile">
                <div className="container padding_786">
                    <nav className="navbar navbar-toggleable-md navbar-light ">
                        <button className="navbar-toggler navbar-toggler-right mt-3 " type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                               
                                </button>
                        <a className="navbar-brand" href="#"><img src={logo} alt="img" className="mobile_logo_width" /></a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={'/home/'}>
                                        Inicio
                                    </Link> 

                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="blog.html">Blog <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="single.html">Single <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton2" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">World <span className="sr-only">(current)</span></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                                        <a className="dropdown-item" href="#">Action in</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownMenuButton3" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">Comunidad<span className="sr-only">(current)</span></a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink_1">
                                        <a className="dropdown-item" href="#">Action in</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="Contact_us.html">Contacto <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default NavBar;



