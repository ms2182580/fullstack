import styled from "styled-components"

export const ORG_D_Results_CardWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "leftPart rightPart"
    "bottomButtons bottomButtons";
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  width: fit-content;

  & > :nth-child(1) {
    grid-area: leftPart;
    min-width: 340px;
  }

  & > :nth-child(2) {
    grid-area: rightPart;
    width: clamp(360px, 30vw, 420px);
  }

  & > :nth-child(3) {
    grid-area: bottomButtons;
  }
`
