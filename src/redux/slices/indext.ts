import { combineReducers } from "@reduxjs/toolkit";
import countriesSlice from "./countries";

// aca inician los Slices que luego son pasados por el store
const rootReducer = combineReducers({
  countriesSlice,
});

export default rootReducer;
