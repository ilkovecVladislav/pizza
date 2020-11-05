import React from 'react';
import classes from './styles.module.css';
import toString from 'lodash/toString';

import styles from './styles.module.css';

type Props = {
  label: string;
  name: string;
  value: string | number | null | undefined;
  options: {
    id: string;
    value: string | number;

    label: string | number;
  }[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButtonField: React.FC<Props> = ({ label, options, name, value, onChange }) => (
  <div className={styles.container}>
    <p className={styles.title}>{label}:</p>
    <div>
      {options.map((option) => (
        <label key={option.id} className={styles.label} htmlFor="thin">
          <input
            className={classes.option}
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={toString(value) === toString(option.value)}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);

export default RadioButtonField;
