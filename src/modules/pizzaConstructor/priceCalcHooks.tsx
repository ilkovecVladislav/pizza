import { useMemo } from 'react';

import { SIZE_FIELD_NAME, BIG_PIZZA_SIZE_VALUE } from './constants';

const BASE_PIZZA_PRICE = 200;
const BIG_PIZZA_SIZE_PRICE = 50;
const ADDITIONAL_INGREDIENT = 29;

type Params = {
  ingredients: { [key: string]: number | string };
  allPizzaParams: string[];
};

const useCalculatePizzaPrice = ({ ingredients, allPizzaParams }: Params): number =>
  useMemo(() => {
    let result = BASE_PIZZA_PRICE;

    allPizzaParams.forEach((ingredientName) => {
      if (ingredients.hasOwnProperty(ingredientName) && ingredientName === SIZE_FIELD_NAME) {
        if (ingredients[ingredientName] === BIG_PIZZA_SIZE_VALUE) {
          result += BIG_PIZZA_SIZE_PRICE;

          return;
        }
      } else if (ingredients.hasOwnProperty(ingredientName) && ingredientName !== SIZE_FIELD_NAME) {
        result += ADDITIONAL_INGREDIENT;
        return;
      }
    });

    return result;
  }, [ingredients, allPizzaParams]);

export default useCalculatePizzaPrice;
