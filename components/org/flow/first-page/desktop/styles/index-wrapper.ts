import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

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

  /* & > :nth-child(2) {
    display: flex;

    white-space: nowrap;
    overflow-x: hidden;

    position: relative;

    margin-bottom: 40px;

    & > :nth-child(1),
    & > :last-child {
      background-color: ${NEUTRALS.OFF_WHITE};

      border-radius: 5px;

      width: ${Variables.widthArrows};
      height: 100%;

      margin: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;
      z-index: 99;

      & > :nth-child(1) {
        width: 100%;
        height: 100%;
        background-color: ${NEUTRALS.OFF_WHITE};
        border: 2px solid ${PRIMARY.PRIMARY_CTA};
        border-radius: inherit;

        display: flex;
        align-items: center;
        justify-content: center;

        & > * {
          & > * {
            fill: ${PRIMARY.PRIMARY_CTA};
          }
        }
      }
    }

    & > :nth-child(1) {
      position: absolute;
      z-index: 3;

      top: 0;
      bottom: 0;
      left: 0px;

      visibility: hidden;



    ul {
      list-style: none;
      display: flex;
      gap: 16px;

      white-space: nowrap;
      overflow-x: hidden;

      position: relative;
      z-index: 1;

      padding-right: 55px;
    }

    & > :last-child {
      position: absolute;
      z-index: 2;
      right: 0px;
      top: 0;
      bottom: 0;
      margin: auto;

      
      &:after {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        right: 0px;

        width: calc(${Variables.widthArrows} + 20px);
        height: 100%;
        background: linear-gradient(90deg, transparent 0%, white 22%);
      }
    }
  } */
`

type Props_LI_Wrapper = {
  isActiveCategory?: boolean
}

export const LI_Wrapper = styled.li<Props_LI_Wrapper>`
  list-style: none;
  border: 2px solid ${PRIMARY.PRIMARY_CTA};
  padding: 8px 16px;
  border-radius: 8px;

  background-color: ${NEUTRALS.OFF_WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  cursor: default;

  & > p {
    text-transform: capitalize;
    color: ${PRIMARY.PRIMARY_CTA};
    font-weight: 600;

    white-space: nowrap;
  }

  ${({ isActiveCategory }) =>
    isActiveCategory &&
    css`
      background-color: ${PRIMARY.PRIMARY_CTA};
      & > p {
        color: ${NEUTRALS.OFF_WHITE};
      }
    `}

  &:hover,
  &:focus-visible {
    ${({ isActiveCategory }) =>
      !isActiveCategory &&
      css`
        background-color: ${PRIMARY.PRIMARY_HOVER};
        border-color: ${PRIMARY.PRIMARY_HOVER};

        & > p {
          color: ${NEUTRALS.OFF_WHITE};
        }
      `}
  }
`
