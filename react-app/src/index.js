import React from 'react';
import { Provider } from 'react-redux'
import configureStore from './store'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
