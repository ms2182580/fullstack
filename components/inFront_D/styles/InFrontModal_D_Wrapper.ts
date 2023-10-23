import styled from "styled-components"

export interface Properties {
  modalShowedCtx?: boolean
  isInDetail?: any
}

export const InFrontModal_D_Wrapper = styled.div<Properties>`
  display: ${({ modalShowedCtx }) => (modalShowedCtx ? `block` : `none`)};

  width: calc(100% + 40px);

  height: 100%;
  left: -40px;

  inset: 0;
  left: ${({ isInDetail }) => (isInDetail?.isInDetail ? `0px` : `-40px`)};

  z-index: 4;
  position: fixed;
  background: rgba(44, 42, 42, 0.61);
`
