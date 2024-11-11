import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

const Variables = {
  widthArrows: "48px",
}

export const INDEX_D_ORGWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  margin-bottom: 56px;
  margin-top: 64px;

  background-image: url("/background/background1.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 224px;

  position: relative;

  & > :nth-child(1) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
    position: relative;
  }

  & > *:not(:nth-child(1)) {
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
  }

  & > :nth-child(1) {
    position: relative;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      "text image"
      "search search";
    grid-auto-flow: dense;

    justify-items: space-between;

    gap: 16px;

    & > :nth-child(1) {
      grid-area: text;
      margin-top: auto;
      margin-bottom: auto;
      min-width: max-content;

      font-weight: 700;
    }

    & > :nth-child(2) {
      grid-area: image;

      justify-self: flex-end;
    }

    & > :nth-child(3) {
      padding-top: 73px;
      grid-area: search;
    }

    & > :nth-child(4) {
      margin-top: 109rem;
      position: absolute;
      top: 0;
      left: 0;
    }
    & > :nth-child(5) {
      margin-top: 185rem;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`
