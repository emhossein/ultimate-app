import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, H1, H2, H3, Paragraph } from '../components';

const Checkout = () => {
  const theme = useTheme();
  const { logged } = useSelector(state => state.auth);
  const [showReceipt, setShowReceipt] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const watchName = watch('firstName', false);
  const watchPhone = watch('phoneNumber', false);
  const watchAddress = watch('address', false);

  const submitHandler = data => {
    console.log(data);
    setShowReceipt(true);
  };

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(80vh - 6.75rem);

    .login {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

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
    }

    .receipt {
      text-align: center;
    }
  `;

  return (
    <Wrapper>
      {!logged && (
        <div className="login">
          <H3>Before to go further, let&apos;s login first.</H3>
          <Button link="/login">LOGIN</Button>
        </div>
      )}
      {logged && !showReceipt && (
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
            type="number"
            placeholder="Phone number"
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && (
            <Paragraph>Please enter your phone number!</Paragraph>
          )}
          <textarea
            placeholder="Your Address"
            cols="30"
            rows="10"
            {...register('address', { required: true })}
          />
          {errors.address && <Paragraph>Please write your address!</Paragraph>}
          <Button type="submit">Submit</Button>
        </form>
      )}
      {showReceipt && (
        <div className="receipt">
          <H1>Your Receipt</H1>
          <div>
            <H2>Buyers Name: {watchName}</H2>
            <H3>We will contact you in case of emergency: {watchPhone}</H3>
            <Paragraph>
              Your items will be delivered to: {watchAddress}
            </Paragraph>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Checkout;
