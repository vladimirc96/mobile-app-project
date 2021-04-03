import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  AUTHENTICATION_ACTIONS,
  AUTHENTICATION_ACTIONS_ASYNC,
} from "../actions/authentication/types";
import { login, logout } from "../../services/AuthService";
import { getUser } from "../../services/UserService";

export function* loginUser() {
  yield takeLatest(AUTHENTICATION_ACTIONS_ASYNC.LOGIN, loginUserAsync);
}

function* loginUserAsync(action) {
  try {
    const token = yield call(login, action.credentials);
    yield put({ type: AUTHENTICATION_ACTIONS.LOGIN, token: token });
    const user = yield call(getUser);
    yield put({ type: "GET_USER_INFO", data: user });
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