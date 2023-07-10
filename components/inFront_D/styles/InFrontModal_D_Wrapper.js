import styled from "styled-components"

export const InFrontModal_D_Wrapper = styled.div`
  display: ${({ modalShowedCtx }) => (modalShowedCtx ? `block` : `none`)};
  width: ${({ isInDetail }) => isInDetail ? `calc(100% + 100px)` : `calc(100% + 40px)`};
  
  height: 100%;
  left: -40px;
  
  inset:0;
  left: ${({ isInDetail }) => isInDetail?.isInDetail ? `0px` : `-40px`};
  
  z-index: 4;
  position: absolute;
  background: rgba(44, 42, 42, 0.61);
  
`
