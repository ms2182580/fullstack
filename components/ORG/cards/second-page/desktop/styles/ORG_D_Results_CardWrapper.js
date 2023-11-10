import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Results_CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-areas:
    "leftPart rightPart"
    "bottomButtons bottomButtons";
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  & > .BOTTOM-BUTTONS {
    grid-area: bottomButtons;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;

    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 8px;

      cursor: pointer;
    }

    & > :nth-child(2) {
      & > :nth-child(1) {
        fill: white;
      }

      & > :nth-child(2) {
        text-transform: capitalize;
      }
    }
  }
`
