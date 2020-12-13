import type { ThunkAction } from 'redux-thunk';
import type { Action } from 'redux';
import groupBy from 'lodash/groupBy';

import type { RootState } from 'store';
import { getIngredients } from 'services/ingredients';
import { SET_PIZZA, SetPizza, SetIngredients, SET_INGREDIENTS, PizzaIngredients } from './types';
import type { FormValues } from '../types';

export const setPizza = (data: FormValues): SetPizza => ({
  type: SET_PIZZA,
  payload: data,
});

export const setIngredients = (data: PizzaIngredients): SetIngredients => ({
  type: SET_INGREDIENTS,
  payload: data,
});

export const loadIngredients = (): ThunkAction<void, RootState, unknown, Action> => async (
  dispatch,
) => {
  const result = await getIngredients();
  const groupedIngredients = groupBy(result, 'category');
  dispatch(setIngredients(groupedIngredients));
};
