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
} from './constants';

const getOptionByValue = (
  options: RadioOption[],
  value: string | number,
): RadioOption | undefined => options.find((item) => toString(item.value) === toString(value));

const getIngredientLabel = (
  ingredientName: string,
  ingredientValue: string | number,
): string | number | undefined | null => {
  switch (ingredientName) {
    case 'size': {
      const option = getOptionByValue(pizzaSizeFieldOptions, ingredientValue);

      return option?.label;
    }
    case 'dough': {
      const option = getOptionByValue(pizzaDoughFieldOptions, ingredientValue);
      if (option && option.label && isString(option.label)) {
        return `на ${toLower(option.label)} тесте`;
      }

      return null;
    }
    case 'sauce': {
      const option = getOptionByValue(pizzaSauceFieldOptions, ingredientValue);

      return option?.label;
    }
    case 'cheese': {
      const option = getOptionByValue(pizzaCheesesFieldOptions, ingredientValue);

      return option?.label;
    }
    case 'vegetables': {
      const option = getOptionByValue(pizzaVegetablesFieldOptions, ingredientValue);

      return option?.label;
    }
    case 'meat': {
      const option = getOptionByValue(pizzaMeatFieldOptions, ingredientValue);

      return option?.label;
    }
    default:
      return null;
  }
};

type Params = {
  ingredients: { [key: string]: number | string };
  allPizzaParams: string[];
};

const useOrderDescription = ({ ingredients, allPizzaParams }: Params): string =>
  useMemo(() => {
    const result = allPizzaParams.map((ingredientName) => {
      const ingredientValue = ingredients[ingredientName];

      if (ingredientValue) {
        return getIngredientLabel(ingredientName, ingredientValue);
      }

      return null;
    });

    return compact(result).join(', ');
  }, [ingredients, allPizzaParams]);

export default useOrderDescription;
