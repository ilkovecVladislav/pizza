import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import userReducer from 'pages/Auth/state/reducer';
import pizzaConstructorReducer from 'pages/PizzaConstructorPage/state/reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancers;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const rootReducer = combineReducers({
  user: userReducer,
  pizzaConstructor: pizzaConstructorReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
