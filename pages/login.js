import React from 'react';
import Head from 'next/head';
import { LoginForm } from '../components';
import { H3, HyperLink } from '../components';
import styled from '@emotion/styled';

const Login = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(80vh - 6.75rem);

    h3 {
      margin-bottom: 0.5rem;
      color: #929292;
    }
  `;

  return (
    <Wrapper>
      <Head>
        <title>Login</title>
      </Head>
      <H3>Login</H3>
      <LoginForm />
      <HyperLink link="/register">don&apos;t have an account yet?</HyperLink>
    </Wrapper>
  );
};

export default Login;
