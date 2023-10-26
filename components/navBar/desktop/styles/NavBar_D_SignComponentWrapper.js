import styled from "styled-components"

export const NavBar_D_SignComponentWrapper = styled.div`
  border-radius: 8px;
  border: 2px solid #151a26;
  padding: 0px 16px;

  z-index: 0;
  display: flex;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    cursor: pointer;
    position: relative;
  }
`
