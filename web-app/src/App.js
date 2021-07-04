import './css/App.css'
import './css/Ad.css'
import './css/Layout.css'
import './css/Categories.css'
import StartingBanner from "./components/StartingBanner.js"
import Header from "./layout/Header.js"
import Footer from "./layout/Footer.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";
import Categories from './screens/Categories.js';
import Ads from './screens/Ads.js';

function App() {
  return (
        <Provider store={persistedStore.store}>
          <PersistGate loading={null} persistor={persistedStore.persistor}>
            <Router>
              <Header/>
              <StartingBanner/>
                <Switch>
                  <Route path="/">
                    <Ads/>
                  </Route>
                </Switch>
                <Footer />
            </Router>
          </PersistGate>
        </Provider>
  );
}

export default App;
