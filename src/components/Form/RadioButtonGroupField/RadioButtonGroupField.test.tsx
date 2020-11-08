import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RadioButtonGroupField from '.';

const options = [
  {
    id: 'medium',
    value: '30',
    label: '30 см',
  },
  {
    id: 'big',
    value: '35',
    label: '35 см',
  },
];

describe('RadioButtonGroupField', () => {
  it('renders RadioButtonGroupField', () => {
    const { getAllByText, queryByLabelText } = render(
      <RadioButtonGroupField
        label="Size"
        name="size"
        options={options}
        value={null}
        onChange={() => undefined}
      />,
    );
    expect(getAllByText('Size:')).toBeTruthy();
    expect(queryByLabelText('30 см')).toBeTruthy();
    expect(queryByLabelText('35 см')).toBeTruthy();
  });
  it('input updates', () => {
    const mockOnChange = jest.fn();
    const { queryByLabelText } = render(
      <RadioButtonGroupField
        label="Size"
        name="size"
        options={options}
        value={null}
        onChange={mockOnChange}
      />,
    );

    const radioButton = queryByLabelText('35 см') as HTMLElement;

    fireEvent.click(radioButton);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
