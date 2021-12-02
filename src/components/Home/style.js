import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  background-image: url("/images/background-home.svg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
  }

  h1 {
    font-size: 3.175rem;
    font-weight: 500;
    margin-bottom: 0.813rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--gray);

    margin-bottom: 2.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.188rem;

    width: 26.875rem;
    height: 3.875rem;

    font-size: 1.55rem;
    border-radius: 4px;

    background: var(--green);

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.475rem;
    }

    p {
      font-size: 1.25rem;
      max-width: 80%;
    }

    button {
      width: 18.875rem;
      height: 3.575rem;

      font-size: 1.2rem;
    }
  }

  @media (max-width: 575.98px) {
    h1 {
      font-size: 2.275rem;
      max-width: 16rem;
    }

    p {
      font-size: 1.15rem;
      max-width: 24rem;
    }

    button {
      width: 18.875rem;
      height: 3.575rem;

      font-size: 1.2rem;
    }
  }
`