import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const HyperLink = ({ children, link }) => {
  const theme = useTheme();

  const Wrapper = styled.div`
    margin: 1rem auto;
    color: ${theme.typography.paragraph.colors.secondary};

    &:hover {
      color: ${theme.typography.paragraph.colors.primary};
      text-decoration: underline;
    }
  `;

  return (
    <Wrapper>
      <Link href={link}>
        <a>{children}</a>
      </Link>
    </Wrapper>
  );
};

export default HyperLink;
