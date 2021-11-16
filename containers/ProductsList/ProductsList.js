import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Product from '../../components/Product/Product';
import { H2 } from '../../components';

const ProductsList = ({ products, loading }) => {
  return (
    <Wrapper>
      <Head>
        <title>Products</title>
      </Head>
      <H2>{products.length} simple products for demo</H2>
      <div className="products-container">
        {loading && <div className="loading"></div>}
        {!loading &&
          products &&
          products.map(prod => {
            const { id, name, image, description } = prod;
            return (
              <Product
                products={products}
                key={id}
                id={id}
                image={image}
                name={name}
                description={description}
              />
            );
          })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(80vh - 6.75rem);

  h2 {
    text-align: center;
    margin-top: 2rem;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
    padding: 2rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ProductsList;
