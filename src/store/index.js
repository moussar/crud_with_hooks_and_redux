import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";

const rootRedcuer = {
  user: userReducer
};

const store = createStore(combineReducers(rootRedcuer), applyMiddleware(thunk));

export default store;
