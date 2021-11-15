import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';

const H3 = ({ children }) => {
  const theme = useTheme();

  const Heading1 = styled.h3`
    margin: 3rem 0 1.38rem;
    font-weight: ${theme.typography.h3.fontWeight};
    line-height: ${theme.typography.h3.lineHeight};
    margin-top: 1rem;
    font-size: ${theme.typography.h3.fontSize};
  `;

  return <Heading1>{children}</Heading1>;
};

export default H3;
