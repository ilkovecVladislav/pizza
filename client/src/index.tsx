import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';
import { Provider } from 'react-redux';

import store from 'store';
import queryConfig from 'config/queryConfig';
import AppRouter from 'routers';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryConfigProvider config={queryConfig}>
        <AppRouter />
      </ReactQueryConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot?.accept();
}
