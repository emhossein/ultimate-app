import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@emotion/react';
import theme from '../config/theme';

const mountWithTheme = ({ children }) => {
  return renderer.create(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default mountWithTheme;
