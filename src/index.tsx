import React from 'react';
import ReactDOM from 'react-dom';

import PizzaConstructor from './pages/PizzaConstructorPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PizzaConstructor />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
}
