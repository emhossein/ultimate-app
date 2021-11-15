import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { H3, Paragraph } from '..';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const theme = useTheme();
  const cart = useSelector(state => state.cart);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.primary};
    padding: 1rem;
    width: 80%;

    .detail {
      width: 80%;
      text-align: center;
    }
  `;

  return (
    <Wrapper>
      <H3>Details</H3>
      <div className="detail">
        <H3>your cart total Items: {cart.totalQuantity}</H3>
        <hr />
        <H3>your cart total Amount:{` $${cart.totalPrice}`}</H3>
      </div>
    </Wrapper>
  );
};

export default Checkout;
