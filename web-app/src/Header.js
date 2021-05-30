// MyComponent.js
import React, { Component } from 'react';
import logo_naziv from "./assets/images/logo_naziv.png"
import white_log_in_icon from "./assets/images/white_login.png"

export default class Header extends Component {
render() {
    return (
        <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top custom-navigation-menu">
        <a className="navbar-brand" href="/"><img src={logo_naziv} alt="" width="310" height="50"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto header-nav-part">
            <li className="nav-item">
                <a className="nav-link" href="/">Početna strana</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">O nama</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Kontakt</a>
            </li>

            
            </ul>
            <form className="col-sm-6 col-lg-3">
                <div class="search_main">
                    <button class="submit_bt"><a href="/"><span class="doctor"><img src={white_log_in_icon} alt="" width="25" height="25"/></span>Uloguj se</a></button>
                </div>
            </form>
        </div>
        </nav>
        </div>
    );
    }
}


