import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import toString from 'lodash/toString';
import head from 'lodash/head';

import { putIngredient, getIngredientById } from 'services/ingredients';
import type Ingredient from 'services/types/Ingredient';

const EditIngredient = (): JSX.Element => {
  const history = useHistory();
  const { id } = useParams();

  const { data } = useQuery(['ingredient', id], getIngredientById, {
    enabled: id,
  });

  const { register, setValue, handleSubmit } = useForm<Ingredient>({
    defaultValues: {
      price: 0,
      category: 'vegetables',
    },
  });

  useEffect(() => {
    if (data) {
      setValue('name', data.name);
      setValue('slug', data.slug);
      setValue('price', data.price);
      setValue('category', data.category);
    }
  }, [data, setValue]);

  const onSubmit = handleSubmit((values) => {
    const { image, name, slug, price, category } = values;
    const formData = new FormData();

    formData.append('name', name);
    formData.append('slug', slug);
    formData.append('price', toString(price));
    formData.append('category', category);

    if (image) {
      const file = head(image) as File;
      formData.append('image', file);
    }

    return Promise.resolve()
      .then(() => putIngredient(id, formData))
      .then(() => history.push('/admin/ingredients'));
  });

  return (
    <div>
      <h2>Редактировать игредиент</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          Название
          <input id="name" type="text" name="name" ref={register} />
        </label>
        <label htmlFor="slug">
          Идентификатор
          <input id="slug" type="text" name="slug" ref={register} />
        </label>
        <label htmlFor="price">
          Цена
          <input id="price" type="number" name="price" ref={register} />
        </label>
        <label htmlFor="category">
          Категория
          <select id="category" name="category" ref={register}>
            <option value="vegetables">Овощи</option>
            <option value="sauces">Соус</option>
            <option value="cheese">Сыр</option>
            <option value="meat">Мясо</option>
          </select>
        </label>
        <label htmlFor="image">
          Картинка
          <input id="image" type="file" name="image" ref={register} />
        </label>

        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default EditIngredient;