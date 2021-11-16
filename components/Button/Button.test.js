/**
 * @jest-environment jsdom
 */

import React from 'react';
import { createSerializer } from '@emotion/jest';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../../config/theme';
import mountWithTheme from '../../utils/mountWithTheme';
import Button from './Button';

expect.addSnapshotSerializer(createSerializer());

describe('Button', () => {
  test('Render Correctly', () => {
    const component = mountWithTheme(<Button>sample button</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders in DOM correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Sample Button in DOM</Button>
      </ThemeProvider>
    );

    expect(getByText(/Sample Button/)).toBeTruthy();
  });
  test('OnClick Works Fine', () => {
    let variable = 1;
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button
          onClick={() => {
            variable += 1;
          }}
        >
          Sample Button in DOM
        </Button>
      </ThemeProvider>
    );

    fireEvent.click(getByText(/Sample Button/));

    expect(variable).toBe(2);
  });
});
