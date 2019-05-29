import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";

/**
 * @author Filip.Kusztelak
 */

export default combineReducers({
  auth: authReducer,
  form: formReducer
});
