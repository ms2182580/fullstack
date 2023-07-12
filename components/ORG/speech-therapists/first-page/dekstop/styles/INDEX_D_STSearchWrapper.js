import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const INDEX_D_STSearchWrapper = styled.div`

  border: 2px solid crimson;
  

  /* background-color: ${NEUTRALS.OFF_WHITE}; */
  /* margin-bottom: 120px; */

  /* position: relative; */

  & > * {
    /* padding-inline: clamp(16px, calc(10vw - 80px), 96px); */
  }

  /* & > :nth-child(1) {
    background: linear-gradient(
      169deg,
      rgba(75, 52, 139, 0.35) 0%,
      rgba(255, 154, 108, 0.46) 45.31%,
      rgba(228, 204, 255, 0.56) 100%
    );
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "text image"
      "search search";
    grid-auto-flow: dense;

    & > :nth-child(1) {
      grid-area: text;
      padding-top: 56px;
    }

    & > :nth-child(2) {
      position: absolute;
      z-index: 1;

      top: 0;
      left: 0;
      right: 0;

      & > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        cursor: pointer;

        width: fit-content;
        padding: 8px 48px;
        margin: auto;

        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

        border-radius: 0 0 8px 8px;

        background-color: ${PRIMARY.PRIMARY_CTA};

        & > p {
          color: ${NEUTRALS.OFF_WHITE};
        }
      }
    }

    & > :nth-child(3) {
      grid-area: image;

      position: relative;
      width: clamp(225px, calc(100vw - 3rem), 500px);
      height: clamp(64px, calc(40vw - 3rem), 320px);
      justify-self: end;
    }

    & > :nth-child(4) {
      padding-top: 73px;
      grid-area: search;
    }
  } */
`
