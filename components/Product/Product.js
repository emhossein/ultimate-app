import React from 'react';
import styled from '@emotion/styled';
import Img from '../Img/Img';
import Link from 'next/link';
import { Paragraph } from '..';

const Product = ({ id, name, image, description }) => {
  return (
    <Wrapper>
      <div className="container">
        <Img src={image} name={name} />
      </div>
      <footer>
        <h5>{name}</h5>
        <Paragraph>{description}</Paragraph>
        <Link href={`/products/${id}`} passHref>
          <a className="link">More...</a>
        </Link>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background: rgba(255, 132, 110, 0.2);
  border-radius: 8px;
  position: relative;

  .container {
    width: 175px;
    position: relative;
    background: #ff846e;
    border-radius: 8px;

    img {
      border-radius: 8px;
    }

    &:hover img {
      opacity: 0.5;
    }
  }

  footer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5,
    p {
      margin-bottom: 0;
      position: absolute;
      font-weight: 400;
    }

    p {
      color: #ff846e;
      letter-spacing: 2px;
      top: 50%;
      right: 50%;
      transform: translateX(110%);
    }

    h5 {
      top: 35%;
      right: 50%;
      transform: translateX(130%);
    }

    a {
      position: absolute;
      bottom: 5%;
      right: 5%;
      color: #5e5e5e;

      &:hover {
        color: #000;
      }
    }
  }
`;

export default Product;
