import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/Services/store'; // Import your Redux store

import App from './App'; // Your main application component

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
