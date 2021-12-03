import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  min-height: 20vh;
  color: var(--black);

  @media (max-width: 991.98px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Navigation = styled.div`
  margin-top: 2.6rem;

  font-size: 1.6rem;
  font-weight: 500;

  ul {
    display: flex;
    gap: 1rem;

    margin-top: 0.4rem;

    font-size: 1.4rem;
    font-weight: 400;
    

    @media (max-width: 991.98px) {
      justify-content: center;
      font-size: 1.2rem;
    }

    li {
      cursor: pointer;
    }
  }
`

export const Contact = styled.div`
  margin-top: 2.6rem;

  font-size: 1.6rem;
  font-weight: 500;

  span {
    margin-top: 0.4rem;
    font-size: 1.4rem;
    font-weight: 400;

    @media (max-width: 991.98px) {
      font-size: 1.2rem;
    }
  }
`

export const Developer = styled.div`
  margin-top: 2.6rem;
  margin-bottom: 2.6rem;

  font-size: 1.6rem;
  font-weight: 500;

  .image {
    margin-top: 1rem;
  }
`