import React from 'react';
import styled from '@emotion/styled';

import { useTheme } from '@emotion/react';

const Paragraph = ({ children }) => {
  const theme = useTheme();

  const Paragraph = styled.p`
    font-weight: ${theme.typography.paragraph.fontWeight};
    line-height: ${theme.typography.paragraph.lineHeight};
    margin-bottom: ${theme.typography.paragraph.marginBottom};
    font-size: ${theme.typography.paragraph.fontSize};
  `;

  return <Paragraph>{children}</Paragraph>;
};

export default Paragraph;
