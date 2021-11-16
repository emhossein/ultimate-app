import React from 'react';
import styled from '@emotion/styled';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import Services from '../components/Services/Services';
import { useTheme } from '@emotion/react';
import { getProducts } from '../slices/productSlice';
import { H1, H3, HyperLink } from '../components';

const Home = ({ products, loading }) => {
  const theme = useTheme();

  const Wrapper = styled.div`
    .hero {
      text-align: center;

      h1 {
        color: ${theme.typography.paragraph.colors.primary};
        margin-bottom: 2rem;
      }
      div {
        width: 10%;
        margin: 0;
        display: inline-block;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="hero">
        <H1>Welcome to Simple Store</H1>
        <H3>
          This is a simple project for practicing Next.js and CSS in Js, and I
          choose to use{' '}
          <HyperLink link="https://emotion.sh/">Emotion</HyperLink>.
        </H3>
      </div>
      {!loading && <FeaturedProduct products={products} />}
      <Services />
    </Wrapper>
  );
};

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getProducts());
  const { product } = reduxStore.getState();

  return {
    products: product.products,
    loading: product.loading,
  };
};

export default Home;
