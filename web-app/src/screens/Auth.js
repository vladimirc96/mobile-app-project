import React, { Component } from "react";
import Register from "./Register";
import Login from "../components/Login";
import { Switch, Route } from "react-router-dom";
import "../css/Auth.css";
import ForgotPassword from "./ForgotPassword";

export class Auth extends Component {
	componentDidMount() {
		console.log(this.props.match);
	}
	render() {
		return (
			<div className="auth">
				<Switch>
					<Route exact path="/auth/register" component={Register}></Route>
					<Route exact path="/auth/login" component={Login}></Route>
					<Route exact path="/auth/forgot-password" component={ForgotPassword} />
				</Switch>
			</div>
		);
	}
}

export default Auth;
