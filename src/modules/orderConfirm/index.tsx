import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderConfirm = (): JSX.Element => {
  const { state }: { state?: { price?: number; description?: string } } = useLocation();

  return (
    <div>
      <Link to="/home">
        <button type="button">Закрыть</button>
      </Link>
      <h3>Спасибо за заказ!</h3>
      <div>
        <h5>Ленивая Маргарита</h5>
        <p>{state?.description || ''}</p>
      </div>
    </div>
  );
};

export default OrderConfirm;
