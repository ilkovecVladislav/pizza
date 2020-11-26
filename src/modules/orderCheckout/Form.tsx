import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { cardMoths, cardYears } from './constants';

const schema = yup.object().shape({
  address: yup
    .string()
    .required('Адресс обязателен к заполнению')
    .min(15, 'Слишком короткий адресс')
    .max(70, 'Слишком длинный адресс'),
  entrance: yup
    .number()
    .positive('Значение подъезда должно позитивным')
    .integer('Значение подъезда должно целым'),
  floor: yup
    .number()
    .positive('Значение этажа должно позитивным')
    .integer('Значение этажа должно целым'),
  door: yup
    .number()
    .positive('Значение квартира должно позитивным')
    .integer('Значение квартира должно целым'),
  cardNumber: yup.string().required('Номер карты обязательное поле').length(19, 'Не верный формат'),
  cardCode: yup
    .number()
    .positive('Значение CVV должно позитивным')
    .integer('Значение CVV должно целым')
    .max(9999, 'Неверное значение CVV'),
});

const normalizeCardNumber = (value: string): string =>
  value
    .replace(/\s/g, '')
    .match(/.{1,4}/g)
    ?.join(' ')
    .substr(0, 19) || '';

type Props = {
  price?: number;
  formSubmit: (data: FormValues) => void;
};

type FormValues = {
  address: string;
  entrance?: number;
  floor?: number;
  door?: number;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardCode: number;
};

const Form = ({ price = 0, formSubmit }: Props): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    formSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Адрес доставки</legend>
        <input
          id="address"
          data-testid="address"
          ref={register}
          type="text"
          name="address"
          placeholder="Введите адрес"
        />
        {errors.address && <p>{errors.address.message}</p>}
        <label htmlFor="entrance">
          подъезд
          <input id="entrance" ref={register} type="number" name="entrance" />
          {errors.entrance && <p>{errors.entrance.message}</p>}
        </label>
        <label htmlFor="floor">
          этаж
          <input id="floor" ref={register} type="number" name="floor" />
          {errors.floor && <p>{errors.floor.message}</p>}
        </label>
        <label htmlFor="door">
          квартира
          <input id="door" ref={register} type="number" name="door" />
          {errors.door && <p>{errors.door.message}</p>}
        </label>
      </fieldset>
      <fieldset>
        <legend>Данные для оплаты</legend>
        <div className="card">
          <div>
            <input
              className="card-number"
              data-testid="card-number"
              placeholder="0000 0000 0000 0000"
              type="tel"
              inputMode="numeric"
              autoComplete="cc-number"
              name="cardNumber"
              ref={register}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target;
                event.target.value = normalizeCardNumber(value);
              }}
            />
            {errors.cardNumber && <p>{errors.cardNumber.message}</p>}
          </div>
          <div className="card-info">
            <div className="card-date">
              <select
                className="card-month"
                data-testid="card-month"
                name="cardMonth"
                ref={register}
              >
                {cardMoths.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select className="card-year" data-testid="card-year" name="cardYear" ref={register}>
                {cardYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <input data-testid="card-code" ref={register} type="number" name="cardCode" />
            {errors.cardCode && <p>{errors.cardCode.message}</p>}
          </div>
        </div>
      </fieldset>

      <button type="submit">Оплатить {price}</button>
    </form>
  );
};

export default Form;
