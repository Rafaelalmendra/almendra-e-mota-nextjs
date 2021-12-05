import styled from "styled-components";

export const Button = styled.button`
    position: fixed; 
    z-index: 1;

    right: 1rem;
    bottom: 1rem;
    max-width: 6.2rem;

    filter: drop-shadow(0px 0px 54px rgba(0, 0, 0, 0.2));
    background: transparent;
    cursor: pointer;

    @media (max-width: 767.98px) {
      max-width: 4.5rem;
  }
`