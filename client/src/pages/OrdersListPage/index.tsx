import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getOrders } from 'services/orders';

const OrdersList = (): JSX.Element => {
  const { data, isLoading } = useQuery('orders', getOrders);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/home">
        <button type="button">Назад</button>
      </Link>
      <h3>Список заказов</h3>
      {data && (
        <div>
          {data.map((item) => (
            <div key={item.name}>
              <p>Название: {item.name}</p>
              <p>Адрес: {item.address}</p>
              <p>
                Ингредиенты:{' '}
                {item.ingredients.map((el) => (
                  <span key={el}>{el}</span>
                ))}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersList;
