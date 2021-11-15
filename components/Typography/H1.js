import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';

const H1 = ({ children }) => {
  const theme = useTheme();

  const Heading1 = styled.h1`
    margin: 3rem 0 1.38rem;
    font-weight: ${theme.typography.h1.fontWeight};
    line-height: ${theme.typography.h1.lineHeight};
    margin-top: 1rem;
    font-size: ${theme.typography.h1.fontSize};
  `;

  return <Heading1>{children}</Heading1>;
};

export default H1;
