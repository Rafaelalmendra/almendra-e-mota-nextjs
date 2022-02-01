import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: var(--black);
  background-image: url("/images/background-fies.svg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10rem 35rem 10rem 35rem;

  h1 {
    text-align: center;
    margin-bottom: 1.8rem;

    font-size: 2.56rem;
    font-weight: 600;
  }

  p {
    text-align: justify;
    font-size: 1.4rem;
    font-weight: 300;
  }

  button {
    margin-top: 3.4rem;
    width: 27rem;
    height: 3.875rem;
    border-radius: 4px;
    background: var(--green);

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 1199.98px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 767.98px) {
      width: 22rem;
      height: 3.875rem;
      font-size: 1.375rem;
    }
  }

  @media (max-width: 1680px) {
    margin: 10rem 25rem 10rem 25rem;
  }

  @media (max-width: 1366px) {
    margin: 10rem 20rem 7rem 20rem;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1199.98px) {
    margin: 10rem 10rem 7rem 10rem;
  }

  @media (max-width: 834px) {
    margin: 10rem 10rem 5rem 10rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.2rem;
    }

    margin: 10rem 5rem 5rem 5rem;
  }

  @media (max-width: 568px) {
    h1 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.1rem;
    }

    margin: 10rem 3rem 5rem 3rem;
  }
`