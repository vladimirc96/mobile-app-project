import authenticationSaga from "./authenticationSaga";
import userSaga from "./userSaga";
import { spawn } from "redux-saga/effects";

export default function* rootSaga() {
	yield spawn(authenticationSaga);
	yield spawn(userSaga);
}
