import React from 'react';
import { Link } from 'react-router-dom';

const OrdersList = (): JSX.Element => (
  <div>
    <Link to="/home">
      <button type="button">Назад</button>
    </Link>
    <h3>Список заказов</h3>
  </div>
);

export default OrdersList;
