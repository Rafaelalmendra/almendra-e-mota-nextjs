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

    font-size: 3.75rem;
    font-weight: 500;
  }

  p {
    font-size: 1.5rem;

    margin-bottom: 6.125rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 70.938rem;
  margin-bottom: 8.438rem;
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

  &:first-child, &:nth-child(3) {
    margin-left: 0;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 2rem;
  }

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  h3 {
    font-size: 1.425rem;
    font-weight: 500;
    margin-left: 1.063rem;
    margin-bottom: 4.813rem;
  }

  span {
    margin-left: 1.063rem;
    cursor: pointer;
    font-size: 1.275rem;

    text-decoration: underline;
  }
`