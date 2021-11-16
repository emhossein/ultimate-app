/**
 * @jest-environment jsdom
 */

import React from 'react';
import { createSerializer } from '@emotion/jest';
import mountWithTheme from '../../utils/mountWithTheme';
import { Img } from '..';

expect.addSnapshotSerializer(createSerializer());

describe('HyperLink', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(<Img src="image" alt="image" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
