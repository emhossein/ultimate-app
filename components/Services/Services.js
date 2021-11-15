import React from 'react';
import styled from '@emotion/styled';
import { services } from '../../utils/constants';
import { H2, Paragraph } from '..';

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <H2>
            custom furniture <br />
            built only for you
          </H2>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit
            illo deserunt quibusdam exercitationem quaerat ullam esse totam ut
            eum!
          </Paragraph>
        </article>
        <div className="services-center">
          {services.map(serv => {
            const { id, icon, title, text } = serv;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <Paragraph>{text}</Paragraph>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background: #ff846e;

  .header {
    h2 {
      margin-bottom: 2rem;
      margin-left: 5rem;
      font-size: 2rem;
    }

    p {
      margin-bottom: 0;
      line-height: 1.8;
      width: 400px;
      color: #fff;
    }
  }

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }

  .service {
    background: #ffac9e;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 8px;
    p {
      color: #fff;
    }
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: #fff;
    color: #ff5c40;

    svg {
      font-size: 2rem;
    }
  }

  @media (min-width: 975px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Services;
