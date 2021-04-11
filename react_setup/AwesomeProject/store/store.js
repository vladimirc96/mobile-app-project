import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import authenticationReducer from "./reducers/authenticationReducer";
import categoryReducer from "./reducers/categoryReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

// STORE CONFIG
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  userReducer: userReducer,
  authenticationReducer: authenticationReducer,
  categoryReducer: categoryReducer,
});

// PERSISTOR CONFIG
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};

export default configureStore;
