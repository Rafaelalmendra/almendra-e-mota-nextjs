import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-height: 6rem;

    /* colors */
    --background-white: #FDFDFD;
    --white: #FFFFFF;
    --black: #101014;
    --gray: #D3D3D3;
    --green: #308C7E;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 11rem;

    font-size: 88%;

    @media (max-width: 1366px) {
      font-size: 85%;
    }

    @media (max-width: 768px) {
      font-size: 80%;
    }
  }

  a {
    text-decoration: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    color: var(--white);
    background: var(--black);
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    z-index: 100;
    background: none;
  }

  .margin {
    margin-right: 4rem;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }
  
  .header.active {
    background: #101014;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  }
  
  .spacing {
    padding: calc(5rem + var(--header-height)) 0;
  }

  .CardBottom {
    margin-bottom: 4.875rem;

    @media (max-width: 800px) {
      margin-bottom: 2rem;
    }
  }
  
  .css-1kpz94o {
    width: 90% !important;
}

  .margins {
    margin-left: 21rem;
    margin-right: 21rem;
  }

  //responsive
  @media (max-width: 1680px) {
    .margins {
      margin-left: 14rem;
      margin-right: 14rem;
    }
  }
  
  @media (max-width: 1366px) {
    .margins {
      margin-left: 10rem;
      margin-right: 10rem;
    }
  }
  
  @media (max-width: 1199.98px) {
    .margins {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  }

  @media (max-width: 800px) {
    .margins {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    
    .desktop {
      display: none;
    }
  }
`