import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 6.25rem;
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    .logo {
      margin-top: 1.2rem;
      max-width: 50%;
    }
  }
`

export const UlContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 991.98px) {
    gap: 1.5rem;
  }
  
  a {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--white);
    transition: ease 0.2s;
    position: relative;

    @media (max-width: 991.98px) {
      font-size: 0.875rem;
    }

    &::after {
      content: '';
      width: 0%;
      height: 1px;
      background: var(--white);
      position: absolute;
      left: 0;
      bottom: -0.4rem;
      transition: ease 0.2s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const MenuMain = styled.div`

`

export const NavgationMobile = styled.div`
  display: none;

  @media (max-width: 767.98px) { 
    display: flex;
  }
`

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  min-height: 100vh;
  background-color: var(--black);
  
  z-index: 10;
`

export const UlLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  li a {
    color: var(--white);
    font-size: 1.65rem;
    font-weight: 400;
    line-height: 4.4rem;
    text-transform: uppercase;
  
    gap: 2.313rem;
  }
`

export const Hamburguer = styled.div`
  font-size: 2.3rem;
  position: relative;
  cursor: pointer;
  z-index: 1000;
  color: var(--white);
`

export const Close = styled.div`
  font-size: 3.2rem;
  position: relative;
  cursor: pointer;
  z-index: 1000;
  color: var(--white);
`