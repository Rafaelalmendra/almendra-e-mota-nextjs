import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 32.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 0.4rem;
  }

  h2 {
    margin-top: 1.4rem;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.2rem;
    text-transform: uppercase;
    text-align: center;
  }

  button {
    width: 18.938rem;
    height: 4.125rem;
    margin-top: 1rem;
    margin-bottom: 2rem;

    color: var(--white);
    text-transform: uppercase;
    font-size: 1.4rem;

    background: var(--green);
    border-radius: 4px;
    transition: filter 0.1s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }
`