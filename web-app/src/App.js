import "./css/App.css";
import "./css/Ad.css";
import "./css/Layout.css";
import Header from "./layout/Header.js";
import Footer from "./layout/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";
import Register from "./screens/Register";
import AdCreation from "./screens/AdCreation";
import Login from "./components/Login";
import Home from "./screens/Home";
import EditProfile from "./components/EditProfile";
function App() {
	return (
		<Provider store={persistedStore.store}>
			<PersistGate loading={null} persistor={persistedStore.persistor}>
				<Router>
					<div className="header-section">
						<Header />
					</div>
					<div className="middle-section">
						<Switch>
							<Route path="/" exact component={AdCreation}></Route>
							<Route path="/register" component={Register}></Route>
							<Route path="/login" component={Login}></Route>
							<Route path="/user/:id/edit-profile" component={EditProfile} />
						</Switch>
					</div>
					<div className="footer-section">
						<Footer />
					</div>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
