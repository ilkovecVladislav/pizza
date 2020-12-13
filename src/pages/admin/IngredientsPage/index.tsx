import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';

import { getIngredients, deleteIngredient } from 'services/ingredients';

const Ingredients = (): JSX.Element => {
  const { data, refetch } = useQuery('ingredients', getIngredients);

  const groupedData = groupBy(data, 'category');
  const handleDeleteIngredient = (id: string) => deleteIngredient(id).then(() => refetch());

  return (
    <div>
      <h2>Ingredients</h2>
      <Link to="/admin/ingredient/new">
        <button type="button">Добавить ингредиент</button>
      </Link>
      <div>
        {map(groupedData, (group, groupName) => (
          <div key={groupName}>
            <h3>{groupName}</h3>
            <table>
              <thead>
                <tr>
                  <th>Название</th>
                  <th>Идентификатор</th>
                  <th>Категория</th>
                  <th>Цена</th>
                  <th>Картинка</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {map(group, (row) => (
                  <tr key={row.slug}>
                    <td>{row.name}</td>
                    <td>{row.slug}</td>
                    <td>{row.category}</td>
                    <td>{row.price}</td>
                    <td>{row.image}</td>
                    <td>
                      <Link to={`/admin/ingredients/${row.slug}`}>
                        <button type="button">Редактировать</button>
                      </Link>
                      <button type="button" onClick={() => handleDeleteIngredient(row.slug)}>
                        Удалить
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
