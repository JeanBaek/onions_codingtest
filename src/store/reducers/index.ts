import { combineReducers } from "redux";
import drugsDataReducer from "./drugsData";
import windowSizeReducer from "./windowSize";

export default combineReducers({ drugsDataReducer, windowSizeReducer });
