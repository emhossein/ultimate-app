import React, { useState } from 'react';
import { Button, Paragraph } from '..';
import { useForm } from 'react-hook-form';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Form = () => {
  const theme = useTheme();

  const [sent, setSent] = useState(false);

  const submitHandler = data => {
    console.log(data);
    setSent(true);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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

        &:last-child {
          margin-top: 1rem;
        }
      }

      .sent {
        margin-top: 1rem;
        color: #000;
      }
    }
  `;

  return (
    <Wrapper className="App">
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

        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="write something"
          {...register('textarea', {
            required: true,
          })}
        />
        {errors.textarea && <Paragraph>Please write something!</Paragraph>}
        <Button type="submit">Submit</Button>
        {sent && <Paragraph>Message has been sent!</Paragraph>}
      </form>
    </Wrapper>
  );
};

export default Form;
