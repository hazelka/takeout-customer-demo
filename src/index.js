import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/cartReducer';
import { checkoutReducer } from './reducers/checkoutReducer';
import App from './components/App';
import './index.css';

const rootReducer = combineReducers({ 
  cart: cartReducer,
  checkout: checkoutReducer 
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default store;