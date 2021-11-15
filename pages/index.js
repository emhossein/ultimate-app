import styled from '@emotion/styled';
import FeaturedProduct from '../components/FeaturedProduct/FeaturedProduct';
import Services from '../components/Services/Services';
import StyledComponent from '../components/StyledComponent/StyledComponent';
import { H1, H3 } from '../components/Typography';
import { useTheme } from '@emotion/react';
import { getProducts } from '../slices/productSlice';

const Home = ({ products, loading }) => {
  const theme = useTheme();

  const Wrapper = styled.div`
    .hero {
      text-align: center;

      h1 {
        color: ${theme.typography.paragraph.colors.primary};
        margin-bottom: 2rem;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="hero">
        <H1>Welcome to Simple Store</H1>
        <H3>
          This is a simple project for practicing Next.js and CSS in Js, and I
          choose to use <StyledComponent />.
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
