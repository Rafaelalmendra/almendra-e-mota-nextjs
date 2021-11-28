import styled from "styled-components"

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

  @media (max-width: 991.98px) {
    margin-left: 0;
    margin-bottom: 2rem;
  }

  @media (max-width: 575.98px) {
    width: 25rem;
    height: 23rem;
  }

  img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  h3 {
    font-size: 1.425rem;
    font-weight: 500;
    margin-left: 1.063rem;

    @media (max-width: 575.98px) {
      font-size: 1.125rem;
    }
  }
  
  p {
    margin-bottom: 3.5213rem;
    margin-left: 1.063rem;
    text-align: left;
    
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 575.98px) {
      font-size: 0.875rem;
    }
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