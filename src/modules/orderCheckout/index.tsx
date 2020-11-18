import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const OrderCheckout = (): JSX.Element => {
  const history = useHistory();
  const { state }: { state?: { price?: number; description?: string } } = useLocation();

  const handleGoBack = () => history.goBack();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Адрес доставки</legend>
          <input id="address" type="text" name="text" placeholder="Введите адрес" required />
          <label htmlFor="entrance">
            подъезд
            <input id="entrance" type="text" name="text" />
          </label>
          <label htmlFor="floor">
            этаж
            <input id="floor" type="text" name="text" />
          </label>
          <label htmlFor="door">
            квартира
            <input id="door" type="text" name="text" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Данные для оплаты</legend>
          <input type="text" name="card" placeholder="Номер карты" required />
          <input type="text" name="expire" required />
          <input type="text" name="code" required />
        </fieldset>

        <button type="submit">Оплатить {state?.price || ''}</button>
      </form>
    </div>
  );
};

export default OrderCheckout;
