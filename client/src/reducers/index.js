import { combineReducers } from "redux";
import authReducer from "./authReducer";

/**
 * @author Filip.Kusztelak
 */

export default combineReducers({
  auth: authReducer
});
