import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Form from './Form';

const OrderCheckout = (): JSX.Element => {
  const history = useHistory();
  const { state }: { state?: { price?: number; description?: string } } = useLocation();

  const handleGoBack = () => history.goBack();

  const onSubmit = () => {
    history.push('/order-confirm');
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Назад
      </button>
      <h3>Оформление заказа</h3>
      <div>
        <h5>Ленивая Маргарита</h5>
        <p>{state?.description || ''}</p>
      </div>
      <Form price={state?.price} formSubmit={onSubmit} />
    </div>
  );
};

export default OrderCheckout;
