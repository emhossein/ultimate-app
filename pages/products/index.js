import React from 'react';
import { ProductsList } from '../../containers';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../slices/productSlice';

const Products = ({ products, loading }) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  // const { products, loading } = useSelector(state => state.product);

  return (
    <div>
      {loading && <div className="loading section-center" />}
      {!loading && <ProductsList products={products} loading={loading} />}
    </div>
  );
};

Products.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(getProducts());
  const { product } = reduxStore.getState();

  return {
    products: product.products,
    loading: product.loading,
  };
};

export default Products;
