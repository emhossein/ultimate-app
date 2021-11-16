/**
 * @jest-environment jsdom
 */

import React from 'react';
import { createSerializer } from '@emotion/jest';
import mountWithTheme from '../../utils/mountWithTheme';
import { HyperLink } from '..';

expect.addSnapshotSerializer(createSerializer());

describe('HyperLink', () => {
  test('Renders Correctly', () => {
    const component = mountWithTheme(
      <HyperLink link="sample">Sample Link</HyperLink>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
