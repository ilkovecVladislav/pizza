import React, { useState, useCallback } from 'react';

import RadioButtonGroupField from 'components/Form/RadioButtonGroupField';
import pepperoniImg from 'assets/images/pepperoni.jpg';
import {
  pizzaSizeFieldOptions,
  pizzaDoughFieldOptions,
  pizzaSauceFieldOptions,
  pizzaCheesesFieldOptions,
  pizzaVegetablesFieldOptions,
  pizzaMeatFieldOptions,
  ALL_PIZZA_PARAMS_ARR,
} from './constants';
import useCalculatePizzaPrice from './priceCalcHooks';
import useOrderDescription from './orderDescriptionHooks';

const PizzaConstructor = (): JSX.Element => {
  const [ingredients, setIngredients] = useState<{ [key: string]: string | number }>({
    size: '30',
    dough: 'thin',
  });

  const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setIngredients((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const price = useCalculatePizzaPrice({ ingredients, allPizzaParams: ALL_PIZZA_PARAMS_ARR });

  const orderDescription = useOrderDescription({
    ingredients,
    allPizzaParams: ALL_PIZZA_PARAMS_ARR,
  });

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
        <RadioButtonGroupField
          label="Размер"
          name="size"
          value={ingredients.size}
          options={pizzaSizeFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonGroupField
          label="Тесто"
          name="dough"
          value={ingredients.dough}
          options={pizzaDoughFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonGroupField
          label="Выберите соус"
          name="sauce"
          value={ingredients.sauce}
          options={pizzaSauceFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonGroupField
          label="Сыр"
          name="cheese"
          value={ingredients.cheese}
          options={pizzaCheesesFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonGroupField
          label="Овощи"
          name="vegetables"
          value={ingredients.vegetables}
          options={pizzaVegetablesFieldOptions}
          onChange={handleChange}
        />
        <RadioButtonGroupField
          label="Мясо"
          name="meat"
          value={ingredients.meat}
          options={pizzaMeatFieldOptions}
          onChange={handleChange}
        />
        <button type="submit">Заказать за {price} руб.</button>
      </form>
    </div>
  );
};

export default PizzaConstructor;
