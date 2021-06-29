import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from './store/Context';
import UserStore from './store/UserStore';

ReactDOM.render(
  <Context.Provider value={{ userStore: new UserStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
