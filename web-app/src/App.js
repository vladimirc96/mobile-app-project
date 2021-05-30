import './css/App.css'
import './css/Ad.css'
import Header from "./layout/Header.js"
import SearchForAd from "./components/SearchForAd.js"
import StartingBanner from "./components/StartingBanner.js"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistedStore from "./store/store";
import Ads from './screens/Ads.js';

function App() {
  return (
        <Provider store={persistedStore.store}>
          <PersistGate loading={null} persistor={persistedStore.persistor}>
            <Router>
              <Header/>
              <StartingBanner/>
                <SearchForAd/>
                <Switch>
                  <Route path="/">
                    <Ads />
                  </Route>
                </Switch>
            </Router>
          </PersistGate>
        </Provider>
  );
}

export default App;
