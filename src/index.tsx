import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from 'routers';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot?.accept();
}
