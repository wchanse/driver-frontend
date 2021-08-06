import { combineReducers } from "redux";

import driverReducer from "./driverReducer";
import selectedDriverReducer from "./selectedDriverReducer";

export default combineReducers({ driverReducer, selectedDriverReducer });
