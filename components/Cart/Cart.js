import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Button, H3, HyperLink } from '..';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { cartActions } from '../../slices/cartSlice';
import Checkout from './Checkout';

const Cart = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const { logged } = useSelector(state => state.auth);

  const plusHandler = cartItem => {
    dispatch(cartActions.addItemToCart(cartItem));
  };
  const minusHandler = cartItem => {
    dispatch(cartActions.removeItemFromCart(cartItem));
  };
  const deleteHandler = cartItem => {
    dispatch(cartActions.deleteItemFromCart(cartItem));
  };

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(80vh - 6.75rem);
    width: 100%;

    .login {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .container {
      width: 80%;
      display: flex;
      justify-content: space-between;

      .cartItem {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: #a5a5a5;
        margin-bottom: 1rem;
        display: flex;
        border-radius: ${theme.borderRadius[2]};
        a {
          margin: 0;
          margin-bottom: -10px;
        }

        img {
          border-top-left-radius: ${theme.borderRadius[2]};
          border-bottom-left-radius: ${theme.borderRadius[2]};
        }

        h3 {
          margin-left: 1rem;
        }

        .plus_minus {
          display: flex;
          align-items: center;
          justify-content: center;

          h3 {
            margin: 0;
            margin-bottom: 10px;
            margin-left: 1rem;
            font-size: 1.1rem;
          }
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-left: 0.5rem;
          margin-bottom: 5px;
          background: ${theme.colors.primary};
          width: 20px;
          height: 20px;
          border-radius: ${theme.borderRadius[2]};
          cursor: pointer;
        }

        .btn_trash {
          padding: 1.5rem;
          font-size: 1.5rem;
          color: #e0ada4;
          cursor: pointer;
        }
      }
    }

    .btn_container {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 50%;
    }
  `;

  return (
    <Wrapper>
      {!logged && (
        <div className="login">
          <H3>Before to go further, let&apos;s login first.</H3>
          <Button link="login">LOGIN</Button>
        </div>
      )}
      {items.length === 0 && logged && (
        <div className="login">
          <H3>Cart is empty, let&apos;s find something!</H3>
          <Button link="products">ALL PRODUCTS</Button>
        </div>
      )}
      {logged &&
        items.map(item => {
          const { id, image, name, quantity, totalPrice } = item;
          return (
            <div key={id} className="container">
              <div className="cartItem">
                <HyperLink link={`/products/${id}`}>
                  <img src={image} name={name} width="150px" height="150px" />
                </HyperLink>
                <div>
                  <H3>{name}</H3>
                  <H3>{`total: $${totalPrice}`}</H3>
                  <div className="plus_minus">
                    <span onClick={() => plusHandler(item)}>
                      <BsPlus />
                    </span>
                    <span onClick={() => minusHandler(item)}>
                      <BiMinus />
                    </span>
                    <H3>x{quantity}</H3>
                  </div>
                </div>
                <div className="btn_trash" onClick={() => deleteHandler(item)}>
                  <FaTrashAlt />
                </div>
              </div>
            </div>
          );
        })}
      {logged && items.length > 0 && <Checkout />}
      {logged && items.length > 0 && (
        <div className="btn_container">
          <Button link="checkout">Checkout</Button>
          <Button link="products">Continue Shopping</Button>
        </div>
      )}
    </Wrapper>
  );
};

export default Cart;
