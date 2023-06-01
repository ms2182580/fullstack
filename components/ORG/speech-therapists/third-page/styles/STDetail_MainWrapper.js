import styled from "styled-components"

export const STDetail_MainWrapper = styled.div`
  margin-inline: 40px;
  
  & > :not(:first-child) > :not(:first-child):not(:last-child):not(.InFront) {
    margin-bottom: 40px;
  }

  & > :not(:first-child) > span.toDisappear {
    display: none;
  }

  & > :nth-child(2) {
    border-radius: 8px;
    position: relative;
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    padding-bottom: ${({ modalShowedCtx }) => (modalShowedCtx ? `0` : `32px`)};
  }

  & > :nth-child(2) > :nth-child(6) > :nth-child(5) {
    scroll-margin-top: 74px;
  }

  /* & > :last-child.InFront {
    width: calc(100% + 40px);
    height: 1000%;
    left: -40px;
    top: 0;
    z-index: 1;
    position: absolute;
    background: rgba(44, 42, 42, 0.61);
  } */
`
