import styled from "styled-components"

export const SLP_D_Results_CardsOnMapWrapper = styled.div`
  position: absolute;
  inset: ${({ bottomOfButton }) => (bottomOfButton ? `${bottomOfButton}px 0 0` : "")};
  
  width: 100%;
`
