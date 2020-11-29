import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Email обязательное поле').email('Неправильный email'),
  password: yup
    .string()
    .required('Пароль обязательное поле')
    .min(8, 'Пароль должен быть минимум 8 символов')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только буквы латинского алфавита'),
});

type FormValues = {
  email: string;
  password: string;
};

const Registration = (): JSX.Element => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const handleGoBack = () => history.goBack();
  const onSubmit = (values: FormValues) => {
    history.push('/home');
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        Назад
      </button>
      <h3>Регистрация</h3>
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
        <button type="submit">Зарегистрироваться</button>
        <Link to="/">
          <button type="button">Войти</button>
        </Link>
      </form>
    </div>
  );
};

export default Registration;
