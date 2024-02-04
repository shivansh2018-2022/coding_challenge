// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/reducer";
import { selectedTabReducer } from "./Reducers/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tabvalue: selectedTabReducer,
  },
});

export default store;
