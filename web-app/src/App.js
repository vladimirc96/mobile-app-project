import './css/App.css'
import './css/Ad.css'
import './css/Layout.css'
import Header from "./layout/Header.js"
import Footer from "./layout/Footer.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";

function App() {
  return (
        <Provider store={persistedStore.store}>
          <PersistGate loading={null} persistor={persistedStore.persistor}>
            <Router>
              <Header/>
                <Switch>
                  <Route path="/">
                  </Route>
                </Switch>
                <Footer />
            </Router>
          </PersistGate>
        </Provider>
  );
}

export default App;
