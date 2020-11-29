import React from 'react';

import { PIZZA_SIZES, DOUGH, SAUCES, CHEESES, VEGETABLES, MEAT } from './constants';
import type { FormValues } from './types';

const PizzaDescription = ({ data }: { data: FormValues }): JSX.Element => (
  <div>
    <p>Размер: {PIZZA_SIZES[data.size].label}</p>
    <p>Тесто: {DOUGH[data.dough].label}</p>
    <p>Соус: {SAUCES[data.sauce]?.label}</p>
    <p>Сыры: {data.cheese.map((item) => CHEESES[item]?.label).join(', ')}</p>
    <p>Овощи: {data.vegetables.map((item) => VEGETABLES[item].label).join(', ')}</p>
    <p>Мясо: {data.meat.map((item) => MEAT[item].label).join(', ')}</p>
  </div>
);

export default PizzaDescription;
