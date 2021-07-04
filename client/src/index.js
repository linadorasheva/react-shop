import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/Context';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';

ReactDOM.render(
  <Context.Provider value={{ userStore: new UserStore(), productStore: new ProductStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
