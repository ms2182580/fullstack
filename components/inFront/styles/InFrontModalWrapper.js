import styled from "styled-components"

export const InFrontModalWrapper = styled.div`
  display: ${({ modalShowedCtx }) => (modalShowedCtx ? `block` : `none`)};
  /* visibility:${({ modalShowedCtx }) => modalShowedCtx ? `visible` : `hidden`}; */
  width: calc(100% + 40px);
  height: 1000%;
  left: -40px;
  top: 0;
  z-index: 1;
  position: absolute;
  background: rgba(44, 42, 42, 0.61);
`
