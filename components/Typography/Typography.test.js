/**
 * @jest-environment jsdom
 */

import React from 'react';
import { createSerializer } from '@emotion/jest';
import mountWithTheme from '../../utils/mountWithTheme';
import { H1, H2, H3, Paragraph } from '.';

expect.addSnapshotSerializer(createSerializer());

describe('Typography', () => {
  test('H1 Renders Correctly', () => {
    const component = mountWithTheme(<H1>Heading 1</H1>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('H2 Renders Correctly', () => {
    const component = mountWithTheme(<H2>Heading 2</H2>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('H3 Renders Correctly', () => {
    const component = mountWithTheme(<H3>Heading 3</H3>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Paragraph Renders Correctly', () => {
    const component = mountWithTheme(<Paragraph>Paragraph</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
