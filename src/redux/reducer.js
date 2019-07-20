import { combineReducers } from "redux";

import app from "../modules/AppState";
import place from "../modules/place/PlaceState";

export default combineReducers({
  app,
  place
});
