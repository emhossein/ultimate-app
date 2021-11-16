import React, { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { H3, HyperLink } from '../../components';
import { FiShoppingCart, FiUserMinus, FiUserPlus } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../slices/authSlice';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const { logged, loading } = useSelector(state => state.auth);
  const { totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <header>
        <nav>
          <div className="logo">
            <H3>
              <Link href="/">Simple Store</Link>
            </H3>
            {logged && (
              <div className="cart">
                <HyperLink link="/cart">
                  <FiShoppingCart /> Cart
                </HyperLink>
              </div>
            )}
          </div>
          <ul>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {!logged && (
              <li>
                <span>
                  <FiUserPlus />
                </span>{' '}
                <Link href="/login">Login</Link>
              </li>
            )}
            {logged && (
              <li>
                <a onClick={logoutHandler}>
                  <FiUserMinus />
                  Logout
                </a>
              </li>
            )}
          </ul>
          <div className="hamburger" onClick={() => setHamburger(!hamburger)}>
            <GiHamburgerMenu />
            {hamburger && (
              <ul>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                {!logged && (
                  <li>
                    <span>
                      <FiUserPlus />
                    </span>{' '}
                    <Link href="/login">Login</Link>
                  </li>
                )}
                {logged && loading && (
                  <li>
                    <a onClick={logoutHandler}>
                      <FiUserMinus />
                      Logout
                    </a>
                  </li>
                )}
                {logged && (
                  <li>
                    <HyperLink link="/cart">
                      <FiShoppingCart /> Cart <span>{totalQuantity}</span>
                    </HyperLink>
                  </li>
                )}
              </ul>
            )}
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  header {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: #ff846e;
      width: 100%;
      height: 56px;

      ul {
        display: flex;
        justify-content: space-evenly;
        width: 40%;
        position: relative;

        li {
          list-style: none;
          letter-spacing: 2px;
          color: #fff;
          transition: all 0.2s;

          &:hover {
            color: #aaaaaa;
            text-decoration: underline;
          }

          a {
            cursor: pointer;
          }
        }
      }
      .hamburger {
        opacity: 0;
        display: none;
      }

      .logo {
        letter-spacing: 2px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          margin-left: 1rem;
          color: #fff;
        }
        .cart {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 30px;
          height: 40px;
          width: 80px;
          margin-left: 1rem;
          cursor: pointer;
          a {
            color: #fff;
            margin: auto;
          }
        }
      }
    }
  }

  @media (max-width: 870px) {
    li {
      display: none;
    }
    .hamburger {
      display: block !important;
      opacity: 1 !important;
      position: absolute;
      top: 2%;
      right: 5%;
      font-size: 24px;
      cursor: pointer;
      color: #fff;

      ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 200px;
        background-color: #ff846e;
        padding: 1.5rem;
        li {
          display: inline-block;
          width: 100%;
          color: #000;
          font-size: 0.8rem;

          div {
            margin: 0;
            a {
              color: #000;
            }
          }
        }
      }
    }

    .logo {
      .cart {
        display: none;

        a {
          display: none;
        }
      }
    }
  }
`;
