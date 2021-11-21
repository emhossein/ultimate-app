import React from 'react';
import Head from 'next/head';
import { LoginForm } from '../components';
import { H3, HyperLink } from '../components';
import styled from '@emotion/styled';
import { getAuthStatus } from '../slices/authSlice';

const Login = ({ user, loading }) => {
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
      <LoginForm user={user} loading={loading} />
      <HyperLink link="/register">don&apos;t have an account yet?</HyperLink>
    </Wrapper>
  );
};

Login.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getAuthStatus());
  const { auth } = reduxStore.getState();

  return {
    user: auth.user,
    loading: auth.loading,
  };
};

export default Login;
