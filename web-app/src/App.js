import "./css/App.css";
import "./css/Ad.css";
import "./css/Layout.css";
import "./css/ContactUs.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";

function App() {
	return (
		<Provider store={persistedStore.store}>
			<PersistGate loading={null} persistor={persistedStore.persistor}>
				<Router>
					<Switch>
						<Route exact path="/login" component={Login}></Route>
						<Route exact path="/register" component={Register}></Route>
						<Route exact path="/forgot-password" component={ForgotPassword}></Route>
						<Route path="/" component={Home}></Route>
					</Switch>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
