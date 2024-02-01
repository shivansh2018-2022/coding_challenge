// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Reducers/reducer';

const store = configureStore({
  reducer: {
    auth: authReducer, // Add more reducers if needed
  },
  // Add middleware and other configuration options if needed
});

export default store;
