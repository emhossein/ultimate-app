import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';

const H2 = ({ children }) => {
  const theme = useTheme();

  const Heading1 = styled.h2`
    margin: 3rem 0 1.38rem;
    font-weight: ${theme.typography.h2.fontWeight};
    line-height: ${theme.typography.h2.lineHeight};
    margin-top: 1rem;
    font-size: ${theme.typography.h2.fontSize};
  `;

  return <Heading1>{children}</Heading1>;
};

export default H2;
