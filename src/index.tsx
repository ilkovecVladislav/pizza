import React from 'react';
import ReactDOM from 'react-dom';
import { ReactQueryConfigProvider } from 'react-query';

import queryConfig from 'config/queryConfig';
import AppRouter from 'routers';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryConfigProvider config={queryConfig}>
      <AppRouter />
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot?.accept();
}
