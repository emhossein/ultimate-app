import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { H1, Paragraph, HyperLink } from '../components';

import { useTheme } from '@emotion/react';

const About = () => {
  const theme = useTheme();

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: calc(80vh - 6.75rem);

    h1 {
      color: ${theme.typography.paragraph.colors.primary};
    }

    .text {
      display: flex;
      flex-direction: column;

      p {
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: center;
        margin-top: 5rem;
        div {
          width: 10%;
          margin: 0;
          display: inline-block;
        }
      }
    }
  `;

  return (
    <Wrapper>
      <Head>
        <title>About</title>
      </Head>
      <H1>A simple About page for Simple Store</H1>
      <div className="text">
        <Paragraph>
          This whole little project is build by next.js(12.0.1) for assignment
          of Maktabkhoone. <br />I used{' '}
          <HyperLink link="https://emotion.sh/">Emotion</HyperLink> for CSS in
          Js. <br />
        </Paragraph>
      </div>
    </Wrapper>
  );
};

export default About;
