import React from 'react';

type Props = {
  id: string;
  label: string;
  name: string;
  register: any;
  value: string;
};

const CheckboxField = ({ label, name, register, id, value }: Props): JSX.Element => (
  <label htmlFor={id}>
    <input id={id} ref={register} type="checkbox" name={name} value={value} />
    {label}
  </label>
);

export default CheckboxField;
