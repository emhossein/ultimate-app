import React, { useState } from 'react';
import { Button, Paragraph } from '..';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { getAuthStatus } from '../../slices/authSlice';

const LoginForm = ({ user, loading }) => {
  const router = useRouter();
  const theme = useTheme();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const email = watch('email', false);
  const password = watch('password', false);

  const exactEmail = user.map(use => use.email);
  const exactPassword = user.map(use => use.password);

  const submitHandler = async data => {
    if (!exactEmail.includes(email) || !exactPassword.includes(password)) {
      console.log('Incorrect username or password.');
      setError(true);
      return;
    } else {
      dispatch(getAuthStatus());
      router.push('/');
      setError(false);
    }
  };

  const Wrapper = styled.div`
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      input,
      textarea,
      button {
        width: 30%;
        padding: 1.2rem;
        margin-bottom: 0.5rem;
        border-radius: ${theme.borderRadius[3]};
        border: ${theme.border[1]} solid ${theme.borderColor.primary};
        outline: 0;
        font-family: 'Josefin Sans', sans-serif;
      }

      button {
        margin: 0;
      }

      p {
        margin: 0 auto;
        line-height: 1.2;
        margin: 0;
        color: #929292;
      }

      p:last-child {
        margin: 1rem 0;
        color: red;
      }
    }
  `;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          placeholder="Your Email"
          type="text"
          {...register('email', {
            required: 'this is required',
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <Paragraph>please enter your email!</Paragraph>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'this is required',
            minLength: {
              value: 6,
              message: 'at least 6 character',
            },
          })}
        />

        {errors.password && <Paragraph>please enter your password!</Paragraph>}

        <Button>{loading ? <div className="loading" /> : 'LOGIN'}</Button>
        {error && <Paragraph>Incorrect username or password.</Paragraph>}
      </form>
    </Wrapper>
  );
};

export default LoginForm;
