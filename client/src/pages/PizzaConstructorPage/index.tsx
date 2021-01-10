import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import isEmpty from 'lodash/isEmpty';

import RadioButtonGroupField from 'components/Form/RadioButtonGroupField';
import CheckboxField from 'components/Form/CheckboxField';
import pepperoniImg from 'assets/images/pepperoni.jpg';
import { loadIngredients, setPizza } from './state/reducer';
import { useIngredients, useIsIngredientsLoading } from './state/selectors';
import PizzaDescription from './PizzaDescription';
import { PIZZA_SIZES, DOUGH } from './constants';
import useCalculatePizzaPrice from './priceCalcHooks';
import type { FormValues } from './types';

const PizzaConstructor = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

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

  const allIngredients = useIngredients();

  const { cheese = [], vegetables = [], sauces = [], meat = [] } = allIngredients;

  const price = useCalculatePizzaPrice({
    ingredients: formValues,
    sauces,
    meat,
    cheese,
    vegetables,
  });

  const onSubmit = handleSubmit((values) => {
    dispatch(setPizza(values));
    history.push('/order-checkout');
  });

  const normalizedSauces = reduce(
    sauces,
    (acc, cur) => ({ ...acc, [cur.slug]: { ...cur, label: cur.name } }),
    {},
  );
  const isLoadingIngredients = useIsIngredientsLoading();

  return (
    <div className="pizza__constructor">
      <img className="pizza__img" src={pepperoniImg} alt="Pepperoni" />
      <h4 className="pizza__name">Pepperoni</h4>
      <PizzaDescription data={formValues} />
      {isLoadingIngredients && <span>Loading</span>}
      {!isLoadingIngredients && !isEmpty(allIngredients) && (
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
            options={normalizedSauces}
          />
          <fieldset>
            <legend>Сыр</legend>
            {map(cheese, (option) => (
              <CheckboxField
                key={option.id}
                id={option.id}
                value={option.slug}
                name="cheese"
                label={option.name}
                register={register}
              />
            ))}
          </fieldset>
          <fieldset>
            <legend>Овощи</legend>
            {map(vegetables, (option) => (
              <CheckboxField
                key={option.id}
                id={option.id}
                value={option.slug}
                name="vegetables"
                label={option.name}
                register={register}
              />
            ))}
          </fieldset>
          <fieldset>
            <legend>Мясо</legend>
            {map(meat, (option) => (
              <CheckboxField
                key={option.id}
                id={option.id}
                value={option.slug}
                name="meat"
                label={option.name}
                register={register}
              />
            ))}
          </fieldset>
          <button type="submit">Заказать за {price} руб.</button>
        </form>
      )}
      <Link to="/orders-history">
        <button type="button">История заказов</button>
      </Link>
    </div>
  );
};

export default PizzaConstructor;
