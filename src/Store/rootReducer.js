import { combineReducers } from "redux";
import homepageReducer from "./homepageReducer";
import posterReducer from "./posterReducer";
const rootReducer = combineReducers({ homepageReducer, posterReducer });

export default rootReducer;
