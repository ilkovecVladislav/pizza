import {
  PizzaConstructorState,
  PizzaConstructorActionTypes,
  SET_PIZZA,
  SET_INGREDIENTS,
} from './types';

const initialState: PizzaConstructorState = {
  pizza: {
    size: 'medium',
    dough: 'thin',
    cheese: [],
    vegetables: [],
    meat: [],
  },
  ingredients: {},
};

const pizzaConstructorReducer = (
  state = initialState,
  action: PizzaConstructorActionTypes,
): PizzaConstructorState => {
  switch (action.type) {
    case SET_PIZZA: {
      return { ...state, pizza: action.payload };
    }
    case SET_INGREDIENTS: {
      return { ...state, ingredients: action.payload };
    }
    default:
      return state;
  }
};

export default pizzaConstructorReducer;
