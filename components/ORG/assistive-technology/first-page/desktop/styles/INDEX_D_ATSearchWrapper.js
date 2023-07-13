import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const INDEX_D_ATSearchWrapper = styled.div`
  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    border-top: 4px solid ${NEUTRALS.LIGHT_GREY};
    padding-top: 21px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title title title"
      "card1 card2 card3"
      ". . finalButton";

    & > :nth-child(1) {
      grid-area: title;
    }

    & > :nth-child(2) {
      grid-area: card1;
    }
    & > :nth-child(3) {
      grid-area: card2;
    }
    & > :nth-child(4) {
      grid-area: card3;
    }

    & > :nth-child(5) {
      grid-area: finalButton;
    }

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
      border: 2px solid crimson;
    }
  }
`
