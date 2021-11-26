import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  background-image: url("/images/background-home.svg");
  background-attachment: fixed;
  background-size: cover;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }

  h1 {
    font-size: 3.75rem;
    font-weight: 400;
    margin-bottom: 0.813rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--gray);

    text-align: center;
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
      filter: brightness(0.8);
    }
  }
`