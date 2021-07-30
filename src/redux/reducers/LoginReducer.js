import * as types from "../actions/CommonActionTypes";
import initialState from "./initial-state";

export default function (state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      localStorage.setItem("isLoggedIn", 1);
      return {
        ...state,
        isLoggedIn: 1,
        EmailId: action.EmailId,
      };
    }
    case types.LOGOUT_APP: {
      localStorage.setItem("isLoggedIn", 0);
      return {
        ...state,
        isLoggedIn: 0,
      };
    }
    default:
      return state;
  }
}
