import Head from 'next/head';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, H2, H3, Paragraph } from '../../components';
import { getProducts } from '../../slices/productSlice';
import { cartActions } from '../../slices/cartSlice';
import { useDispatch } from 'react-redux';

const ProductId = ({ products, loading }) => {
  const router = useRouter();
  const productId = router.query.productId;
  const dispatch = useDispatch();
  const getProductById = () => {
    return products.find(product => product.id === productId);
  };
  const product = getProductById();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(product));
  };

  return (
    <Wrapper>
      <Head>
        <title>Products - {product.name}</title>
      </Head>
      {loading && <div className="loading section-center" />}
      {!loading && (
        <>
          <div className="image">
            <H3>{product.name}</H3>
            <Image
              className="featuredImg"
              src={product.image}
              alt="product image"
              width="400px"
              height="400px"
            />
          </div>
          <div className="text">
            <H2>{product.name}</H2>
            <Paragraph>{product.description}</Paragraph>
            <Paragraph>{`Price: $${product.price}`}</Paragraph>
            <Button link="products">All Products</Button>
            <Button onClick={addToCartHandler}>Add to cart</Button>
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
  min-height: calc(80vh - 6.75rem);

  .image {
    margin: 5rem 0 0 -5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    img {
      border-radius: 8px;
      margin-top: 1rem;
    }

    h3 {
      text-align: right;
      background: linear-gradient(222deg, #ff846e 30%, #ffffff 92%);
      transform: skew(15deg);
      padding: 1rem;
      z-index: 10;
      position: absolute;
      top: 5%;
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
        right: 38%;
        transform: skew(15deg) translateX(70%);
      }
    }
  }
`;

ProductId.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getProducts());
  const { product } = reduxStore.getState();

  return {
    products: product.products,
    loading: product.loading,
  };
};

export default ProductId;
