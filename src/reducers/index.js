import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import userFormReducer from "./formReducer";

export default combineReducers({
  form: formReducer,
  userForm: userFormReducer,
});
