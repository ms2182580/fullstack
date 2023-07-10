import styled from "styled-components"

/* 
!FH

Create a component that check if the user is still in desktop or change to mobile
*/

export const InFrontModal_D_Wrapper = styled.div`
  display: ${({ modalShowedCtx }) => (modalShowedCtx ? `block` : `none`)};
  width: ${({ isInDetail }) => isInDetail ? `calc(100% + 100px)` : `calc(100% + 40px)`};
  
  height: 100%;
  left: -40px;
  
  inset:0;
  left: ${({ isInDetail }) => isInDetail?.isInDetail ? `0px` : `-40px`};
  
  color:${({ isInDetail }) => console.log({ isInDetail })};
  z-index: 4;
  position: absolute;
  background: rgba(44, 42, 42, 0.61);
  
  /* background: crimson; */
`
