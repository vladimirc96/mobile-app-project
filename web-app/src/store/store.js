import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/userReducer";
import authenticationReducer from "./reducers/authenticationReducer";
import subcategoryReducer from "./reducers/subcategoryReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// STORE CONFIG
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
	userReducer: userReducer,
	authenticationReducer: authenticationReducer,
	subcategoryReducer: subcategoryReducer
});

// PERSISTOR CONFIG
const persistConfig = {
	key: "root",
	storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
const persistedStore = { store, persistor };

export default persistedStore;
