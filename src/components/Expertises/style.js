import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: var(--background-white);

  color: var(--black);

  h1 {
    margin-top: 4.225rem;
    text-align: center;

    font-size: 3.175rem;
    font-weight: 500;
  }

  p {
    font-size: 1.5rem;
    text-align: center;

    margin-bottom: 6.125rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.475rem;
    }

    p {
      font-size: 1.25rem;
      margin-bottom: 3.25rem;
    }
  }

  @media (max-width: 575.98px) {
    h1 {
      font-size: 2.275rem;
    }

    p {
      font-size: 1.15rem;
      max-width: 24rem;
    }
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 70.938rem;
  margin-bottom: 8.438rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    margin-bottom: 3.25rem;
  }
`

export const Card = styled.div`
  width: 26.563rem;
  height: 25.438rem;
  cursor: pointer;

  margin-left: 4rem;
  
  background: var(--white);
  
  border-radius: 4px;
  box-shadow: 0px 0px 29px -1px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;

  &:first-child, &:nth-child(3), &:nth-child(5) {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 991.98px) {
    margin-left: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 575.98px) {
    width: 19rem;
    height: 21rem;
  }

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  h3 {
    font-size: 1.425rem;
    font-weight: 500;
    margin-left: 1.063rem;
    margin-bottom: 4.5213rem;

    @media (max-width: 575.98px) {
      font-size: 1.125rem;
    }
  }

  p {
      font-size: 1rem;
  }

  span {
    margin-left: 1.063rem;
    cursor: pointer;
    font-size: 1.275rem;

    text-decoration: underline;

    @media (max-width: 575.98px) {
      font-size: 1.125rem;
    }
  }
`