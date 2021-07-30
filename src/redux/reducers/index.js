import { combineReducers } from "redux";
import auth from "./LoginReducer";
//import apiCallsInProgress from "./apiStatusReducer";

const appReducer = combineReducers({
  auth,
  //apiCallsInProgress,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state [Ref: https://medium.com/@asher.cassetto.cohen/resetting-redux-state-with-a-root-reducer-bonus-how-to-reset-state-selectively-e2a008d0de61]
  if (action.type === "LOGOUT_APP") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
