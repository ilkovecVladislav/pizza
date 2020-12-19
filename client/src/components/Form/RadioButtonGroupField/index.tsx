import React from 'react';
import map from 'lodash/map';

import styles from './styles.module.css';

type Props = {
  label: string;
  name: string;
  register: any;
  options: {
    [key: string]: {
      label: string;
    };
  };
};

const RadioButtonGroupField = ({ label, options, name, register }: Props): JSX.Element => (
  <div className={styles.container}>
    <p className={styles.title}>{label}:</p>
    <div>
      {map(options, (option, key) => (
        <label key={key} className={styles.label} htmlFor={key}>
          <input
            id={key}
            className={styles.option}
            ref={register}
            type="radio"
            name={name}
            value={key}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

export default RadioButtonGroupField;
