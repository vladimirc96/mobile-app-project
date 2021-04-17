import { takeLatest, put, all, call } from "redux-saga/effects";
import { USER_ACTIONS, USER_ACTIONS_ASYNC } from "../actions/user/types";
import { loginUserAsync } from "./authenticationSaga";
import { getUser, signup } from "../../services/UserService";

// export function* updateUser() {
//   yield takeLatest(USER_ACTIONS_ASYNC.UPDATE_USER, updateUserAsync);
// }

export function* getUserInfo() {
  yield takeLatest(USER_ACTIONS_ASYNC.GET_USER_INFO, getUserInfoAsync);
}

export function* registerUser() {
  yield takeLatest(USER_ACTIONS_ASYNC.REGISTER_USER, registerUserAsync);
}
// function* updateUserAsync(action) {
//   try {
//     // API CALL
//     yield put({ type: USER_ACTIONS.GET_USER_INFO, data: data });
//   }catch(err){
//     console.log(err);
//   }
// }

function* getUserInfoAsync() {
  try {
    const data = yield call(getUser);
    yield put({ type: USER_ACTIONS.GET_USER_INFO, data: data });
  } catch (err) {
    console.log(err);
  }
}

function* registerUserAsync(action) {
  try {
    yield call(signup, action.data);
    const loginAction = {
      credentials: action.credentials,
      navigation: action.navigation,
    };
    yield call(loginUserAsync, loginAction);
  } catch (err) {
    console.log(err);
  }
}

export default function* userSaga() {
  yield all([getUserInfo(), registerUser()]);
}
