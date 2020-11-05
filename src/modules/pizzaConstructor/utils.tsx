import { useMemo } from 'react';
import toString from 'lodash/toString';
import compact from 'lodash/compact';
import toLower from 'lodash/toLower';
import isString from 'lodash/isString';

import type RadioOption from '../../types/RadioOption';
import {
  pizzaSizeFieldOptions,
  pizzaDoughFieldOptions,
  pizzaSauceFieldOptions,
  pizzaCheesesFieldOptions,
  pizzaVegetablesFieldOptions,
  pizzaMeatFieldOptions,
  BASE_PIZZA_PRICE,
  BIG_PIZZA_SIZE_PRICE,
  ADDITIONAL_INGREDIENT,
  SIZE_FIELD_NAME,
  DOUGH_FIELD_NAME,
  SAUCE_FIELD_NAME,
  CHEESE_FIELD_NAME,
  VEGETABLES_FIELD_NAME,
  MEAT_FIELD_NAME,
  BIG_PIZZA_SIZE,
  ALL_PIZZA_PARAMS_ARR,
} from './constants';

const useCalculatePrice = (ingredients: { [key: string]: number | string }): number =>
  useMemo(() => {
    let result = BASE_PIZZA_PRICE;

    ALL_PIZZA_PARAMS_ARR.forEach((ingredientName) => {
      if (ingredients.hasOwnProperty(ingredientName) && ingredientName === SIZE_FIELD_NAME) {
        if (ingredients[ingredientName] === toString(BIG_PIZZA_SIZE)) {
          result += BIG_PIZZA_SIZE_PRICE;

          return;
        }
      } else if (ingredients.hasOwnProperty(ingredientName) && ingredientName !== SIZE_FIELD_NAME) {
        result += ADDITIONAL_INGREDIENT;
        return;
      }
    });

    return result;
  }, [ingredients]);

const getOptionByValue = (
  options: RadioOption[],
  value: string | number,
): RadioOption | undefined => options.find((item) => toString(item.value) === toString(value));

const getIngredientLabel = (
  ingredientName: string,
  ingredientValue: string | number,
): string | number | undefined | null => {
  switch (ingredientName) {
    case SIZE_FIELD_NAME: {
      const option = getOptionByValue(pizzaSizeFieldOptions, ingredientValue);
      return option?.label;
    }
    case DOUGH_FIELD_NAME: {
      const option = getOptionByValue(pizzaDoughFieldOptions, ingredientValue);
      if (option && option.label && isString(option.label)) {
        return `на ${toLower(option.label)} тесте`;
      }
      return null;
    }
    case SAUCE_FIELD_NAME: {
      const option = getOptionByValue(pizzaSauceFieldOptions, ingredientValue);
      return option?.label;
    }
    case CHEESE_FIELD_NAME: {
      const option = getOptionByValue(pizzaCheesesFieldOptions, ingredientValue);
      return option?.label;
    }
    case VEGETABLES_FIELD_NAME: {
      const option = getOptionByValue(pizzaVegetablesFieldOptions, ingredientValue);
      return option?.label;
    }
    case MEAT_FIELD_NAME: {
      const option = getOptionByValue(pizzaMeatFieldOptions, ingredientValue);
      return option?.label;
    }
    default:
      return null;
  }
};

const useOrderDescription = (ingredients: { [key: string]: number | string }): string =>
  useMemo(() => {
    const result = ALL_PIZZA_PARAMS_ARR.map((ingredientName) => {
      const ingredientValue = ingredients[ingredientName];

      if (ingredientValue) {
        return getIngredientLabel(ingredientName, ingredientValue);
      }
      return null;
    });

    return compact(result).join(', ');
  }, [ingredients]);

export { useCalculatePrice, useOrderDescription };
