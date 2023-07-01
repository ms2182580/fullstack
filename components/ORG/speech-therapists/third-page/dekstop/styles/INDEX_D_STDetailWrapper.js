import styled from "styled-components"

export const INDEX_D_STDetailWrapper = styled.div`
  margin-inline: 40px;
  margin-bottom: 84px;
  
  & > :not(:first-child) > :not(:first-child):not(:last-child):not(.InFront) {
    margin-bottom: 48px;
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

`
