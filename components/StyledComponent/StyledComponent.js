import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const StyledComponent = () => {
  return (
    <Wrapper>
      <Link href="https://emotion.sh/">Emotion</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #ff846e;
  transition: all 0.2s;
  display: inline-block;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

export default StyledComponent;
