import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => <Button link="/">Primary</Button>;
export const secondary = () => <Button>Secondary</Button>;
