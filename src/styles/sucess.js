import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  background-image: url("/images/background-contact.svg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`

export const ContainerMargins = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;  

  h1 {
    font-size: 2rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  button {
    width: 27rem;
    height: 3.875rem;

    font-size: 1.6rem;
    color: var(--black);
    background: var(--white);

    border-radius: 4px;

    transition: filter 0.2s ease-in-out;

    @media (max-width: 768px) {
      width: 20rem;
      font-size: 1.4rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`