import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authentication/authenticationActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUserCircle);

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
		this.props.history.push("/");
	};

	handleLogin = () => {};

	componentDidMount() {
		console.log(this.props.user);
	}

	render() {
		return (
			<div className="banner-section">
				<div className="banner-section__top-nav">
					<div className="wrap">
						<div className="banner-section__navigation">
							<div className="banner-section__brand">
								<Link to="/">
									<img className="banner-section__logo-image" src={logo} alt="LOGO" />
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
										<Link to="/login">
											<li className="main-navigation__list">
												<span className="main-navigation__link main-navigation__link--login">
													Prijavite se
												</span>
											</li>
										</Link>
									) : (
										<span>
											<li className="main-navigation__list" onClick={this.handleLogout}>
												<span className="main-navigation__link main-navigation__link--registration">
													Postavi oglas
												</span>
											</li>
											<li className="main-navigation__list">
												<div class="dropdown">
													<FontAwesomeIcon
														className="menu-icon"
														icon="user-circle"
														id="dropdownMenuButton"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
														size="3x"
													/>
													<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
														<ul>
															<li className="dropdown-item">Moj profil</li>
															<Link
																to={`/user/${
																	this.props.user && this.props.user.id
																		? this.props.user.id
																		: null
																}/edit-profile`}
															>
																<li className="dropdown-item">Izmena profila</li>
															</Link>
															<div class="dropdown-divider"></div>
															<li className="dropdown-item" onClick={this.handleLogout}>
																Odjavi se
															</li>
														</ul>
													</div>
												</div>
											</li>
										</span>
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

const HeaderComp = withRouter(Header);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);
