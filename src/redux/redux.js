import profile from "./reducers/profile";
import places from "./reducers/places";
import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profile,
  places,
  form: formReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
