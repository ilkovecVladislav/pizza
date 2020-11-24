import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const LogIn = (): JSX.Element => {
  const history = useHistory();

  const handleGoBack = () => history.goBack();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push('/home');
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Назад
      </button>
      <h3>Авторизация</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">
          E-mail
          <input id="email" type="email" name="email" />
        </label>
        <label htmlFor="password">
          Пароль
          <input id="password" type="password" name="password" />
        </label>
        <button type="submit">Войти</button>
        <Link to="/registration">
          <button type="button">Зарегистрироваться</button>
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
