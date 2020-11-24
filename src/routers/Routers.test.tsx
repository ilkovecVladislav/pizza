import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import App from '.';

describe('App', () => {
  it('navigates to registration page', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    expect(container.innerHTML).toMatch('Авторизация');

    fireEvent.click(getByText(/зарегистрироваться/i));

    expect(container.innerHTML).toMatch('Регистрация');
  });

  it('navigates to home page', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    history.push('/registration');

    expect(container.innerHTML).toMatch('Регистрация');

    fireEvent.click(getByText(/зарегистрироваться/i));

    expect(container.innerHTML).toMatch('История заказов');
  });

  it('navigates to order checkout page', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    history.push('/home');

    expect(container.innerHTML).toMatch('Заказать');

    fireEvent.click(getByText(/заказать/i));

    expect(container.innerHTML).toMatch('Оформление заказа');
  });

  xit('navigates to orders list page', () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>,
    );

    history.push('/home');

    expect(container.innerHTML).toMatch('Заказать');

    fireEvent.click(getByText(/история заказов/i));

    expect(container.innerHTML).toMatch('Список заказов');
  });
});
