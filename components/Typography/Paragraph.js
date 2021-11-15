import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';

const H1 = ({ children }) => {
  const theme = useTheme();

  const Heading1 = styled.p`
    font-weight: ${theme.typography.paragraph.fontWeight};
    line-height: ${theme.typography.paragraph.lineHeight};
    margin-bottom: ${theme.typography.paragraph.marginBottom};
    font-size: ${theme.typography.paragraph.fontSize};
  `;

  return <Heading1>{children}</Heading1>;
};

export default H1;
