import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  AUTHENTICATION_ACTIONS,
  AUTHENTICATION_ACTIONS_ASYNC,
} from "../actions/authentication/types";
import { login, logout } from "../../services/AuthService";

export function* loginUser() {
  yield takeLatest(AUTHENTICATION_ACTIONS_ASYNC.LOGIN, loginUserAsync);
}

function* loginUserAsync(action) {
  try {
    const token = yield call(login, action.credentials);
    yield put({ type: AUTHENTICATION_ACTIONS.LOGIN, token: token });
  } catch (err) {
    console.log(err);
  }
}

export function* logoutUser() {
  yield takeLatest(AUTHENTICATION_ACTIONS_ASYNC.LOGOUT, logoutUserAsync);
}

function* logoutUserAsync() {
  try {
    yield call(logout);
    yield put({ type: AUTHENTICATION_ACTIONS.LOGOUT });
  } catch (err) {
    console.log(err);
  }
}

export default function* authenticationSaga() {
  yield all([loginUser(), logoutUser()]);
}
