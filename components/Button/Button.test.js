import React from 'react';
import Button from './Button';
import mountWithTheme from '../../utils/mountWithTheme';

describe('Button', () => {
  test('Render correctly', () => {
    const component = mountWithTheme(<Button>sample button</Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  console.log('describe outer-c');
});
