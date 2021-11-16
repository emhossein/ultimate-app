import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Button, H2, H3, Img, Paragraph } from '..';

const FeaturedProduct = ({ products, loading }) => {
  const getFeatured = () => {
    return products.find(product => product.featured === true);
  };

  const featured = getFeatured();

  return (
    <Wrapper>
      {loading && <div className="loading" />}
      {!loading && (
        <>
          <div className="image">
            <H3>Featured Product</H3>
            <Img
              className="featuredImg"
              src={featured.image}
              alt="featured product"
              width="400px"
              height="400px"
            />
          </div>
          <div className="text">
            <H2>{featured.name}</H2>
            <Paragraph>{featured.description}</Paragraph>
            <Button link="products">All Products</Button>
          </div>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 0 5rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .image {
    margin: 5rem 0 0 -5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    h3 {
      text-align: right;
      background: linear-gradient(222deg, #ff846e 30%, #ffffff 92%);
      transform: skew(15deg);
      padding: 1rem;
      z-index: 10;
      position: absolute;
      top: -10%;
      right: -1%;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      color: #ff846e;
      font-size: 2rem;
      margin-bottom: 0;
    }

    p {
      width: 400px;
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 990px) {
    /* grid-template-row: repeat(2, 1fr);
    grid-template-columns: 1fr; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .image {
      align-items: center;

      h3 {
        top: -10%;
        right: 42%;
        transform: skew(15deg) translateX(70%);
      }
    }
  }
`;

export default FeaturedProduct;
