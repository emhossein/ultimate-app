import React from 'react';
import Head from 'next/head';
import { H3, HyperLink, RegisterForm } from '../components';
import styled from '@emotion/styled';
import { getAuthStatus } from '../slices/authSlice';

const Register = ({ user, loading }) => {
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
    p {
      text-align: center;
      line-height: 1.2;
      margin: 0;
      color: #929292;
    }

    .sent {
      margin-top: 1rem;
      color: #000;
    }
  `;

  return (
    <Wrapper>
      <Head>
        <title>Register</title>
      </Head>
      <H3>Create an account</H3>
      <RegisterForm user={user} loading={loading} />
      <HyperLink link="/login">Already have an account?</HyperLink>
    </Wrapper>
  );
};

Register.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getAuthStatus());
  const { auth } = reduxStore.getState();

  return {
    user: auth.user,
    loading: auth.loading,
  };
};

export default Register;
