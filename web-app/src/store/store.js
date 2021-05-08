import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import authenticationReducer from "./reducers/authenticationReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

// STORE CONFIG
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  userReducer: userReducer,
  authenticationReducer: authenticationReducer
});

// PERSISTOR CONFIG
const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
const persistedStore = { store, persistor };


export default persistedStore;