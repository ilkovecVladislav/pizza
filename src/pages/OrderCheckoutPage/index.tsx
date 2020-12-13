import React from 'react';
import { useHistory } from 'react-router-dom';

import { postOrder } from 'services/orders';
import Form from './Form';
import useCalculatePizzaPrice from '../PizzaConstructorPage/priceCalcHooks';
import { useIngredients, usePizzaData } from '../PizzaConstructorPage/state/selectors';

const OrderCheckout = (): JSX.Element => {
  const history = useHistory();

  const handleGoBack = () => history.goBack();

  const pizzaData = usePizzaData();

  const {
    cheese: cheeseValue = [],
    meat: meatValue = [],
    vegetables: vegetablesValue = [],
    sauce: sauceValue = '',
  } = pizzaData;

  const onSubmit = ({ card_number, address }: { card_number: string; address: string }) => {
    const ingredients = [sauceValue, ...cheeseValue, ...meatValue, ...vegetablesValue];

    return postOrder({
      card_number,
      address,
      name: Math.random().toString(36).slice(2),
      ingredients,
    }).then(() => history.push('/order-confirm'));
  };
  const { cheese = [], vegetables = [], sauces = [], meat = [] } = useIngredients();

  const price = useCalculatePizzaPrice({
    ingredients: pizzaData,
    sauces,
    meat,
    cheese,
    vegetables,
  });

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Назад
      </button>
      <h3>Оформление заказа</h3>
      <div>
        <h5>Ленивая Маргарита</h5>
      </div>
      <Form price={price} formSubmit={onSubmit} />
    </div>
  );
};

export default OrderCheckout;
