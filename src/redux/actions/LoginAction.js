import * as types from "./CommonActionTypes";

export function loginSuccess(EmailId) {
  return {
    type: types.LOGIN_SUCCESS,
    EmailId,
  };
}

export function logout() {
  return {
    type: types.LOGOUT_APP,
  };
}

export function login(EmailId, password) {
  return function (dispatch) {
    if (EmailId == "hruday@gmail.com" && password == "hruday123") {
      dispatch(loginSuccess(EmailId));
    }
  };
}
