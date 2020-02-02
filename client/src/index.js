import React from 'react';
import ReactDOM from 'react-dom';

import { CookiesProvider } from 'react-cookie';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';

import App from './App';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);
