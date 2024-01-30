import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Services/Reducers/reducer';
import { thunk as thunkMiddleware } from 'redux-thunk';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
  // Add other configuration options if needed
});

export default store;
