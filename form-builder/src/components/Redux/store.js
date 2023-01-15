import { createStore, combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { currentFormReducer } from "./CurrentForm/reducer";
const rootReducer = combineReducers({
  user: userReducer,
  curForm: currentFormReducer,
});
const store = createStore(rootReducer);
export default store;
