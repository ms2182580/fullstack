import styled from "styled-components"

export const CR_D_Results_CardsOnMapCardWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => top && `${top}px`};
  left: ${({ left }) => left && `${left}px`};

  cursor: pointer;
`
