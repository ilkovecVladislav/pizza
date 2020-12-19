import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getOrders } from 'services/orders';
import type Order from 'services/types/Order';

const OrdersList = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Order[] | null>(null);

  useEffect(() => {
    Promise.resolve()
      .then(() => {
        setIsLoading(true);

        return getOrders();
      })
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
