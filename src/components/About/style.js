import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  background-image: url("/images/background-about.svg");
  background-attachment: fixed;
  background-size: cover;
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h1 {
      margin-top: 4.75rem;
      margin-bottom: 2.5rem;

      font-size: 3.175rem;
      font-weight: 500;
    }

    p {
      font-size: 1.275rem;
      font-weight: 400;
      text-align: justify;
      line-height: 2.25rem;

      margin-bottom: 3.5rem;
    }

    .line {
      margin-bottom: 4.563rem;
    }

    @media (max-width: 768px) {
      h1 {
        font-size: 2.475rem;
      }

      p {

        font-size: 1rem;
        line-height: 2rem;
      }

      .line {
        margin-bottom: 4.563rem;
        max-width: 68%;
      }
    }
  }
  
  `