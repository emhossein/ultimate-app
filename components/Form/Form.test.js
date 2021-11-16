/**
 * @jest-environment jsdom
 */

import React from 'react';
import { createSerializer } from '@emotion/jest';
import mountWithTheme from '../../utils/mountWithTheme';
import Form from './Form';
import { LoginForm, RegisterForm } from '..';

expect.addSnapshotSerializer(createSerializer());

describe('Forms', () => {
  test('Form Renders Correctly', () => {
    const component = mountWithTheme(<Form />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Login Form Renders Correctly', () => {
    const component = mountWithTheme(<LoginForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Register Form Renders Correctly', () => {
    const component = mountWithTheme(<RegisterForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
