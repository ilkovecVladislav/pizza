const BIG_PIZZA_SIZE_VALUE = '35';

export const PIZZA_SIZES = {
  medium: { label: '30 см', price: 0 },
  big: { label: '35 см', price: 50 },
};

export const DOUGH = {
  thin: { label: 'Тонкое', price: 0 },
  lush: { label: 'Пышное', price: 0 },
};

export const SAUCES = {
  tomato: { label: 'Томатный', price: 29 },
  white: { label: 'Белый', price: 29 },
  spicy: { label: 'Острый', price: 29 },
};

export const CHEESES = {
  mozzarella: { label: 'Моцарелла', price: 29 },
  cheddar: { label: 'Чеддер', price: 29 },
  dor_blu: { label: 'Дор блю', price: 29 },
};

export const VEGETABLES = {
  tomato: { label: 'Помидор', price: 29 },
  mushrooms: { label: 'Грибы', price: 29 },
  pepper: { label: 'Перец', price: 29 },
};

export const MEAT = {
  bacon: { label: 'Бекон', price: 29 },
  pepperoni: { label: 'Пепперони', price: 29 },
  ham: { label: 'Ветчина', price: 29 },
};

const SIZE_FIELD_NAME = 'size';
const DOUGH_FIELD_NAME = 'dough';
const SAUCE_FIELD_NAME = 'sauce';
const CHEESE_FIELD_NAME = 'cheese';
const VEGETABLES_FIELD_NAME = 'vegetables';
const MEAT_FIELD_NAME = 'meat';
const ALL_PIZZA_PARAMS_ARR = [
  SIZE_FIELD_NAME,
  DOUGH_FIELD_NAME,
  SAUCE_FIELD_NAME,
  CHEESE_FIELD_NAME,
  VEGETABLES_FIELD_NAME,
  MEAT_FIELD_NAME,
];

export {
  // other
  SIZE_FIELD_NAME,
  BIG_PIZZA_SIZE_VALUE,
  ALL_PIZZA_PARAMS_ARR,
};
