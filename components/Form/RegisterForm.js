import React, { useState } from 'react';
import { Button, Paragraph } from '..';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { postAuthRegister } from '../../slices/authSlice';

const RegisterForm = ({ user, loading }) => {
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

  const name = watch('firstName', false);
  const email = watch('email', false);
  const password = watch('password', false);

  const values = {
    name,
    email,
    password,
  };

  const exactEmail = user.map(use => use.email);

  const submitHandler = async data => {
    if (!exactEmail.includes(email)) {
      dispatch(postAuthRegister(values));
      router.push('/login');
      setError(false);
    } else {
      setError(true);
      return;
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
        text-align: center;
        line-height: 1.2;
        margin: 0;
        color: #929292;
      }

      p:last-child {
        color: red;
        margin: 1rem 0;
      }
    }
  `;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="text"
          placeholder="Your Name"
          {...register('firstName', {
            required: 'this is a required',
          })}
        />

        {errors.firstName && <p>please enter your name!</p>}
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
        {errors.email && <p>please enter your email!</p>}

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

        {errors.password && <p>please enter your password!</p>}

        <Button>{loading ? <div className="loading" /> : 'REGISTER'}</Button>

        {error && <Paragraph>This email already exist!</Paragraph>}
      </form>
    </Wrapper>
  );
};

export default RegisterForm;
