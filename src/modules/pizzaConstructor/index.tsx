import React, { useState, useCallback } from 'react';

import RadioButtonField from '../../components/Form/RadioButtonField';
import pepperoniImg from '../../assets/images/pepperoni.jpg';
import {
  pizzaSizeFieldOptions,
  pizzaDoughFieldOptions,
  pizzaSauceFieldOptions,
  pizzaCheesesFieldOptions,
  pizzaVegetablesFieldOptions,
  pizzaMeatFieldOptions,
  SIZE_FIELD_NAME,
  DOUGH_FIELD_NAME,
  SAUCE_FIELD_NAME,
  CHEESE_FIELD_NAME,
  VEGETABLES_FIELD_NAME,
  MEAT_FIELD_NAME,
  MEDIUM_PIZZA_SIZE,
  THIN_DOUGH,
} from './constants';
import { useCalculatePrice, useOrderDescription } from './utils';

const PizzaConstructor: React.FC = () => {
  const [ingredients, setIngredients] = useState<{ [key: string]: string | number }>({
    [SIZE_FIELD_NAME]: MEDIUM_PIZZA_SIZE,
    [DOUGH_FIELD_NAME]: THIN_DOUGH,
  });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setIngredients((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const price = useCalculatePrice(ingredients);
  const orderDescription = useOrderDescription(ingredients);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      alert(`Ваш заказ: Пицца ${orderDescription}. Итоговая цена: ${price}`);
    },
    [price, orderDescription],
  );

  return (
    <div className="pizza__constructor">
      <img className="pizza__img" src={pepperoniImg} alt="Pepperoni" />
      <h4 className="pizza__name">Pepperoni</h4>
      <p>{orderDescription}</p>
      <form onSubmit={handleSubmit}>
        <RadioButtonField
          label="Размер"
          name={SIZE_FIELD_NAME}
          value={ingredients[SIZE_FIELD_NAME]}
          options={pizzaSizeFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonField
          label="Тесто"
          name={DOUGH_FIELD_NAME}
          value={ingredients[DOUGH_FIELD_NAME]}
          options={pizzaDoughFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonField
          label="Выберите соус"
          name={SAUCE_FIELD_NAME}
          value={ingredients[SAUCE_FIELD_NAME]}
          options={pizzaSauceFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonField
          label="Сыр"
          name={CHEESE_FIELD_NAME}
          value={ingredients[CHEESE_FIELD_NAME]}
          options={pizzaCheesesFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonField
          label="Овощи"
          name={VEGETABLES_FIELD_NAME}
          value={ingredients[VEGETABLES_FIELD_NAME]}
          options={pizzaVegetablesFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonField
          label="Мясо"
          name={MEAT_FIELD_NAME}
          value={ingredients[MEAT_FIELD_NAME]}
          options={pizzaMeatFieldOptions}
          onChange={handleChange}
        />
        <button type="submit">Заказать за {price} руб.</button>
      </form>
    </div>
  );
};

export default PizzaConstructor;
