const MEDIUM_PIZZA_SIZE = 30;
const BIG_PIZZA_SIZE = 35;

const pizzaSizeFieldOptions = [
  {
    id: 'medium',
    value: MEDIUM_PIZZA_SIZE,
    label: '30 см',
  },
  {
    id: 'big',
    value: BIG_PIZZA_SIZE,
    label: '35 см',
  },
];

const THIN_DOUGH = 'thin';

const pizzaDoughFieldOptions = [
  {
    id: 'thin',
    value: THIN_DOUGH,
    label: 'Тонкое',
  },
  {
    id: 'lush',
    value: 'lush',
    label: 'Пышное',
  },
];
const pizzaSauceFieldOptions = [
  {
    id: 'tomato',
    value: 'tomato',
    label: 'Томатный',
  },
  {
    id: 'white',
    value: 'white',
    label: 'Белый',
  },
  {
    id: 'spicy',
    value: 'spicy',
    label: 'Острый',
  },
];

const pizzaCheesesFieldOptions = [
  {
    id: 'mozzarella',
    value: 'mozzarella',
    label: 'Моцарелла',
  },
  {
    id: 'cheddar',
    value: 'cheddar',
    label: 'Чеддер',
  },
  {
    id: 'dor_blu',
    value: 'dor_blue',
    label: 'Дор блю',
  },
];

const pizzaVegetablesFieldOptions = [
  {
    id: 'tomato',
    value: 'tomato',
    label: 'Помидор',
  },
  {
    id: 'mushrooms',
    value: 'mushrooms',
    label: 'Грибы',
  },
  {
    id: 'pepper',
    value: 'pepper',
    label: 'Перец',
  },
];

const pizzaMeatFieldOptions = [
  {
    id: 'bacon',
    value: 'bacon',
    label: 'Бекон',
  },
  {
    id: 'pepperoni',
    value: 'pepperoni',
    label: 'Пепперони',
  },
  {
    id: 'ham',
    value: 'ham',
    label: 'Ветчина',
  },
];

const BASE_PIZZA_PRICE = 200;
const BIG_PIZZA_SIZE_PRICE = 50;
const ADDITIONAL_INGREDIENT = 29;

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
  MEAT_FIELD_NAME,
];

export {
  // options
  pizzaSizeFieldOptions,
  pizzaDoughFieldOptions,
  pizzaSauceFieldOptions,
  pizzaCheesesFieldOptions,
  pizzaVegetablesFieldOptions,
  pizzaMeatFieldOptions,
  // prices
  BASE_PIZZA_PRICE,
  BIG_PIZZA_SIZE_PRICE,
  ADDITIONAL_INGREDIENT,
  // fields names
  SIZE_FIELD_NAME,
  DOUGH_FIELD_NAME,
  SAUCE_FIELD_NAME,
  CHEESE_FIELD_NAME,
  VEGETABLES_FIELD_NAME,
  MEAT_FIELD_NAME,
  // other
  MEDIUM_PIZZA_SIZE,
  BIG_PIZZA_SIZE,
  THIN_DOUGH,
  ALL_PIZZA_PARAMS_ARR,
};
