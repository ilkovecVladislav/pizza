import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { logIn } from '../state/reducer';

const schema = yup.object().shape({
  email: yup.string().required('Email обязательное поле').email('Неправильный email'),
  password: yup.string().required('Пароль обязательное поле'),
});

type FormValues = {
  email: string;
  password: string;
};

const LogIn = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleGoBack = () => history.goBack();
  const onSubmit = () => {
    dispatch(logIn());
    history.push('/home');
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Назад
      </button>
      <h3>Авторизация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          E-mail
          <input ref={register} id="email" type="email" name="email" />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label htmlFor="password">
          Пароль
          <input ref={register} id="password" type="password" name="password" />
          {errors.password && <p>{errors.password.message}</p>}
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
