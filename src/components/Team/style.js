import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 7.5rem;

  h2 {
    margin-top: 4.75rem;
    margin-bottom: 3.225rem;

    font-size: 3.175rem;
    font-weight: 500;
    text-align: center;

    color: var(--black);

    @media (max-width: 575.98px) {
      font-size: 2.475rem;
    }
  }
`

export const Cards = styled.div`
  display: flex;
  gap: 5.75rem;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  height: 28rem;

  text-align: center;
  color: var(--black);

  border-radius: 4px;
  box-shadow: 0px -1px 29px rgba(0, 0, 0, 0.08);

  @media (max-width: 575.98px) {
    width: 22rem;
    height: 29rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-left: 2.75rem;
    margin-right: 2.75rem;
  }

  span {
    margin-bottom: 1.75rem;
  }

  p {
    font-size: 1.125rem;
    margin-left: 2.75rem;
    margin-right: 2.75rem;
    text-align: justify;
  }
`