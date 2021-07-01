import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
export default class Header extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
  }

  handleNavToggle = () => {
    this.setState((prevstate) => ({ showMenu: !prevstate.showMenu }));
  };

  render() {
    return (
      <div class="banner-section">
        <div class="banner-section__top-nav">
          <div class="wrap">
            <div class="banner-section__navigation">
              <div class="banner-section__brand">
                <a href="/">
                  <img
                    class="banner-section__logo-image"
                    src={logo}
                    alt="LOGO"
                  />
                </a>
              </div>
              <nav class="main-navigation">
                <div class="main-navigation__mobile">
                  <span
                    id="nav-toggle"
                    className={this.state.showMenu ? "active" : ""}
                    onClick={this.handleNavToggle}
                  >
                    <span></span>
                  </span>
                </div>
                <ul
                  class="main-navigation__ul"
                  style={this.state.showMenu ? { display: "block" } : {}}
                >
                  <li class="main-navigation__list">
                    <a class="main-navigation__link" href="/">
                      Pocetna
                    </a>
                  </li>
                  <li class="main-navigation__list">
                    <a class="main-navigation__link" href="/">
                      Kontakt
                    </a>
                  </li>
                  <li class="main-navigation__list">
                    <a class="main-navigation__link" href="/">
                      O nama
                    </a>
                  </li>
                  <li class="main-navigation__list">
                    <a
                      class="main-navigation__link main-navigation__link--login"
                      href="/"
                    >
                      Prijavite se
                    </a>
                  </li>
                  <Link to="/register">
                    <li class="main-navigation__list">
                      <a
                        class="main-navigation__link main-navigation__link--registration"
                        href="/"
                      >
                        Registracija
                      </a>
                    </li>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
	