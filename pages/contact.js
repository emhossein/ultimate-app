import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Form from '../components/Form/Form';
import { H3 } from '../components';

const Contact = () => {
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
        <title>Contact</title>
      </Head>
      <H3>Contact with Us!</H3>
      <Form />
    </Wrapper>
  );
};

export default Contact;
