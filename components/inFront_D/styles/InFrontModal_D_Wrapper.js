import styled from "styled-components"

/* 
!FH

Create a component that check if the user is still in desktop or change to mobile
*/

export const InFrontModal_D_Wrapper = styled.div`
  display: ${({ modalShowedCtx }) => (modalShowedCtx ? `block` : `none`)};
  width: calc(100% + 40px);
  height: 1000%;
  left: -40px;
  top: 0;
  z-index: 1;
  position: absolute;
  background: rgba(44, 42, 42, 0.61);
`
