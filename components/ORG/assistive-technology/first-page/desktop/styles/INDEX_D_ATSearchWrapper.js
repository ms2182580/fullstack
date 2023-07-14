import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const INDEX_D_ATSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 40px;

  & > * {
    border-top: 4px solid ${NEUTRALS.LIGHT_GREY};
    padding-top: 21px;

    display: grid;
    gap: 24px;
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
      width: 45%;

      justify-self: end;
      & > :nth-child(1) {
        width: 100%;
      }
    }

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
      border-radius: 8px;

      display: grid;
      grid-template-rows: min(209px) repeat(5, auto);

      & > :nth-child(1) {
        justify-self: center;
        margin: auto;
      }

      & > *:not(:first-child) {
        padding-inline: 24px;
      }

      & > :nth-child(2) {
        padding-top: 24px;
      }

      & > :nth-child(2),
      & > :nth-child(3) {
        padding-bottom: 8px;
      }

      & > :nth-child(4),
      & > :nth-child(5) {
        padding-bottom: 32px;
      }

      & > :last-child {
        padding-bottom: 24px;

        & > :nth-child(1) {
          width: 100%;
          & > * {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
          }
        }
      }
    }
  }

`
