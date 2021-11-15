import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Paragraph } from '../../components';

const Footer = () => {
  return (
    <Foot>
      <Paragraph>
        &copy; {new Date().getFullYear()}{' '}
        <Link href="/" passHref>
          <span>Simple Store.</span>
        </Link>
      </Paragraph>
    </Foot>
  );
};

const Foot = styled.footer`
  margin-top: 10rem;
  padding: 1rem;
  height: 4.9rem;
  background: #3a3a3a;
  text-align: center;

  p {
    color: #fff;

    span {
      transition: all 0.2s;
      cursor: pointer;
      color: #ff846e;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export default Footer;
