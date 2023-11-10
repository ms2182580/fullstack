import styled from "styled-components"

export const ORG_D_Results_CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-areas:
    "leftPart rightPart"
    "bottomButtons bottomButtons";
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  & > :nth-child(1) {
    grid-area: leftPart;
  }

  & > :nth-child(2) {
    grid-area: rightPart;
  }

  & > :nth-child(3) {
    grid-area: bottomButtons;
  }
`
