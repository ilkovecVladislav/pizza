import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import map from 'lodash/map';

import RadioButtonGroupField from 'components/Form/RadioButtonGroupField';
import CheckboxField from 'components/Form/CheckboxField';
import pepperoniImg from 'assets/images/pepperoni.jpg';
import PizzaDescription from './PizzaDescription';
import {
  PIZZA_SIZES,
  DOUGH,
  SAUCES,
  CHEESES,
  VEGETABLES,
  MEAT,
  ALL_PIZZA_PARAMS_ARR,
} from './constants';
import useCalculatePizzaPrice from './priceCalcHooks';
import type { FormValues } from './types';

const PizzaConstructor = (): JSX.Element => {
  const history = useHistory();

  const { register, handleSubmit, watch } = useForm<FormValues>({
    defaultValues: {
      size: 'medium',
      dough: 'thin',
      cheese: [],
      vegetables: [],
      meat: [],
    },
  });

  const formValues = watch();

  const price = useCalculatePizzaPrice({
    ingredients: formValues,
    allPizzaParams: ALL_PIZZA_PARAMS_ARR,
  });

  const onSubmit = handleSubmit(() => {
    history.push('/order-checkout', {
      price,
      description: '',
    });
  });

  return (
    <div className="pizza__constructor">
      <img className="pizza__img" src={pepperoniImg} alt="Pepperoni" />
      <h4 className="pizza__name">Pepperoni</h4>
      <PizzaDescription data={formValues} />
      <form onSubmit={onSubmit}>
        <RadioButtonGroupField
          label="Размер"
          name="size"
          register={register}
          options={PIZZA_SIZES}
        />
        <RadioButtonGroupField label="Тесто" name="dough" register={register} options={DOUGH} />
        <RadioButtonGroupField
          label="Выберите соус"
          name="sauce"
          register={register}
          options={SAUCES}
        />
        <fieldset>
          <legend>Сыр</legend>
          {map(CHEESES, (option, key) => (
            <CheckboxField
              key={key}
              id={key}
              value={key}
              name="cheese"
              label={option.label}
              register={register}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>Овощи</legend>
          {map(VEGETABLES, (option, key) => (
            <CheckboxField
              key={key}
              id={key}
              value={key}
              name="vegetables"
              label={option.label}
              register={register}
            />
          ))}
        </fieldset>
        <fieldset>
          <legend>Мясо</legend>
          {map(MEAT, (option, key) => (
            <CheckboxField
              key={key}
              id={key}
              value={key}
              name="meat"
              label={option.label}
              register={register}
            />
          ))}
        </fieldset>
        <button type="submit">Заказать за {price} руб.</button>
      </form>
      <Link to="/orders-history">
        <button type="button">История заказов</button>
      </Link>
    </div>
  );
};

export default PizzaConstructor;
