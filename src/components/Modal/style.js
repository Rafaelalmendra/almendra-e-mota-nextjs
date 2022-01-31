import styled from "styled-components";

export const WrapperModal = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  padding: 0.875rem;

  font-size: 1rem;
  color: var(--black);

  filter: drop-shadow(7px 7px 8px rgba(0, 0, 0, 0.22));
  background-color: var(--white);
  border-radius: 4px;
`

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 3rem;
  }
`