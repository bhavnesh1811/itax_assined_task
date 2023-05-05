import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./Profile/profile.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  profilesManager: profileReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
