import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import RegistrationPage from 'pages/RegistrationPage';
import LogInPage from 'pages/LogInPage';
import PizzaConstructorPage from 'pages/PizzaConstructorPage';
import OrderCheckoutPage from 'pages/OrderCheckoutPage';
import OrderConfirmPage from 'pages/OrderConfirmPage';
import OrdersListPage from 'pages/OrdersListPage';
import IngredientsPage from 'pages/admin/IngredientsPage';
import CreateIngredientPage from 'pages/admin/CreateIngredientPage';
import EditIngredientPage from 'pages/admin/EditIngredientPage';

const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={LogInPage} exact />
      <Route path="/registration" component={RegistrationPage} exact />
      <Route path="/home" component={PizzaConstructorPage} exact />
      <Route path="/order-checkout" component={OrderCheckoutPage} exact />
      <Route path="/order-confirm" component={OrderConfirmPage} exact />
      <Route path="/orders-history" component={OrdersListPage} exact />
      <Route path="/admin/ingredients" component={IngredientsPage} exact />
      <Route path="/admin/ingredients/new" component={CreateIngredientPage} exact />
      <Route path="/admin/ingredients/:id" component={EditIngredientPage} exact />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
