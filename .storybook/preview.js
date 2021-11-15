import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../config/theme';

addDecorator(storyFn => {
  const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>{storyFn()}</Wrapper>
    </ThemeProvider>
  );
});
