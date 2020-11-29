import { useMemo } from 'react';

import type { FormValues } from './types';
import { PIZZA_SIZES, SAUCES, DOUGH, CHEESES, VEGETABLES, MEAT } from './constants';

const BASE_PIZZA_PRICE = 200;

type Params = {
  ingredients: FormValues;
  allPizzaParams: string[];
};

const useCalculatePizzaPrice = ({ ingredients }: Params): number =>
  useMemo(() => {
    const { size, dough, sauce = '', cheese, vegetables, meat } = ingredients;
    const sizePrice: number = PIZZA_SIZES[size].price;
    const doughPrice: number = DOUGH[dough].price;
    const saucesPrice: number = SAUCES[sauce]?.price || 0;
    const cheesesPrice = cheese.reduce((price, value) => price + CHEESES[value].price, 0);
    const vegetablesPrice = vegetables.reduce((price, value) => price + VEGETABLES[value].price, 0);
    const meatPrice = meat.reduce((price, value) => price + MEAT[value].price, 0);

    return (
      BASE_PIZZA_PRICE +
      sizePrice +
      doughPrice +
      saucesPrice +
      cheesesPrice +
      vegetablesPrice +
      meatPrice
    );
  }, [ingredients]);

export default useCalculatePizzaPrice;
