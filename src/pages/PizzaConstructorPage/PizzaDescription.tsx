import React from 'react';
import map from 'lodash/map';

import { PIZZA_SIZES, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } from './constants';
import type { FormValues } from './types';

const PizzaDescription = ({ data }: { data: FormValues }): JSX.Element => (
  <div>
    <p>Размер: {PIZZA_SIZES[data.size].label}</p>
    <p>Тесто: {DOUGH[data.dough].label}</p>
    <p>Соус: {SAUCES[data.sauce]?.label}</p>
    <p>Сыры: {map(data.cheese, (item) => CHEESES[item]?.label).join(', ')}</p>
    <p>Овощи: {map(data.vegetables, (item) => VEGETABLES[item].label).join(', ')}</p>
    <p>Мясо: {map(data.meat, (item) => MEAT[item].label).join(', ')}</p>
  </div>
);

export default PizzaDescription;
