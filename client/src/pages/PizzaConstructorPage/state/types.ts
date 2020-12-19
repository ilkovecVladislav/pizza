import type Ingredient from 'services/types/Ingredient';
import type { FormValues } from '../types';

export const SET_PIZZA = 'pizzaConstructor/SET_PIZZA';
export const SET_INGREDIENTS = 'pizzaConstructor/SET_INGREDIENTS';

export type SetPizza = {
  type: typeof SET_PIZZA;
  payload: FormValues;
};

export type PizzaIngredients = { [key: string]: Ingredient[] };

export type SetIngredients = {
  type: typeof SET_INGREDIENTS;
  payload: PizzaIngredients;
};

export type PizzaConstructorActionTypes = SetPizza | SetIngredients;

export type PizzaConstructorState = {
  pizza: FormValues;
  ingredients: PizzaIngredients;
};
