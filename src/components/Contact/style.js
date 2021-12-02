import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  background-image: url("/images/background-contact.svg");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
`

export const ContainerAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;

  @media (max-width: 1199.98px) {
    flex-direction: column;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1199.98px) {
    margin-top: 4rem;
    align-items: center;
  }

  p {
    font-size: 2rem;
    max-width: 38rem;

    @media (max-width: 1199.98px) {
      text-align: center;
    } 

    @media (max-width: 767.98px) {
      font-size: 1.675rem;
    }

    @media (max-width: 575.98px) {
      font-size: 1.375rem;
    }
  }

  button {
    margin-top: 2rem;
    width: 27rem;
    height: 3.875rem;
    border-radius: 4px;
    background: var(--green);

    transition: filter 0.2s ease-in-out;

    @media (max-width: 1199.98px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 767.98px) {
      width: 22rem;
      height: 3.875rem;
      font-size: 1.375rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  width: 32.875rem;
  height: 37.563rem;

  padding-left: 2.438rem;
  padding-right: 2.438rem;
  padding-top: 2.125rem;

  border: 1px solid var(--white);
  border-radius: 4px;

  @media (max-width: 1199.98px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 767.98px) {
    width: 25rem;
    height: 37.563rem;
    padding-left: 1.875rem;
    padding-right: 1.875rem;
    padding-top: 1.875rem;
  }

  @media (max-width: 414px) {
    width: 20rem;
    height: 37.563rem;
  }
  
  p {
    font-size: 2.125rem;
    font-weight: 400;

    @media (max-width: 767.98px) {
      font-size: 1.875rem;
    }
  }

  form {
    margin-top: 2.688rem;

    input {
      width: 100%;
      margin-bottom: 2.188rem;

      font-size: 1.425rem;
      font-weight: 300;

      background: none;
      border-bottom: 1px solid var(--white);
      
      &::placeholder{
        color: #898989;
        font-weight: 300;
      }

      &:focus {
        outline: none;
      }
    }

    textarea {
      width: 100%;
      height: 8rem;
      margin-bottom: 1rem;

      font-size: 1.425rem;
      font-weight: 300;

      background: none;
      border-bottom: 1px solid var(--white);
      resize: none;
      
      &::placeholder{
        color: #898989;
        font-weight: 300;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      width: 100%;
      height: 3.75rem;

      font-size: 1.8rem;
      color: var(--black);
      background-color: var(--white);
      border-radius: 4px;

      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`