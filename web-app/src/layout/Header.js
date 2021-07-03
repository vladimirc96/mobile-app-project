import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authentication/authenticationActions";
export class Header extends Component {
  constructor() {
    super();
    this.state = { showMenu: false };
  }

  handleNavToggle = () => {
    this.setState((prevstate) => ({ showMenu: !prevstate.showMenu }));
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  handleLogin = () => {};

  componentDidMount() {
    console.log(this.props.token);
  }

  render() {
    return (
      <div className="banner-section">
        <div className="banner-section__top-nav">
          <div className="wrap">
            <div className="banner-section__navigation">
              <div className="banner-section__brand">
                <Link to="/">
                  <img
                    className="banner-section__logo-image"
                    src={logo}
                    alt="LOGO"
                  />
                </Link>
              </div>
              <nav className="main-navigation">
                <div className="main-navigation__mobile">
                  <span
                    id="nav-toggle"
                    className={this.state.showMenu ? "active" : ""}
                    onClick={this.handleNavToggle}
                  >
                    <span></span>
                  </span>
                </div>
                <ul
                  className="main-navigation__ul"
                  style={this.state.showMenu ? { display: "block" } : {}}
                >
                  <li className="main-navigation__list">
                    <a className="main-navigation__link">Pocetna</a>
                  </li>
                  <li className="main-navigation__list">
                    <a className="main-navigation__link">Kontakt</a>
                  </li>
                  <li className="main-navigation__list">
                    <a className="main-navigation__link">O nama</a>
                  </li>
                  {!this.props.token ? (
                    <Link to="/">
                      <li className="main-navigation__list">
                        <span className="main-navigation__link main-navigation__link--login">
                          Prijavite se
                        </span>
                      </li>
                    </Link>
                  ) : (
                    <li
                      className="main-navigation__list"
                      onClick={this.handleLogout}
                    >
                      <span className="main-navigation__link main-navigation__link--login">
                        Odjavi se
                      </span>
                    </li>
                  )}
                  {!this.props.token ? (
                    <Link to="/register">
                      <li className="main-navigation__list">
                        <span className="main-navigation__link main-navigation__link--registration">
                          Registracija
                        </span>
                      </li>
                    </Link>
                  ) : null}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    token: state.authenticationReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
