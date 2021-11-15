import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Button = ({ children, link, onClick }) => {
  const theme = useTheme();

  const Btn = styled.button`
    margin-top: 2rem;
    width: 200px;
    height: 45px;
    border: 1px solid ${theme.colors.primary};
    background: ${link ? theme.colors.primary : theme.colors.secondary};
    color: ${link ? theme.colors.secondary : theme.colors.primary};
    border-radius: 8px;
    transition: all 0.1s;
    cursor: pointer;

    button {
      background: transparent;
      border: 0;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      &:hover {
        color: ${theme.colors.primary};
      }
    }

    &:hover {
      background: ${link ? theme.colors.secondary : theme.colors.primary};
      color: ${link ? theme.colors.primary : theme.colors.secondary};
    }
  `;

  if (!link) {
    return <Btn onClick={onClick}>{children}</Btn>;
  }

  return (
    <Btn type={link ? null : 'submit'}>
      <Link href={`/${link ? link : null}`}>{children}</Link>
    </Btn>
  );
};

export default Button;
