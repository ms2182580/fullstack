import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

const PROPS = {
  HEIGHT: "4px",
  BACKGROUND_COLOR: `${NEUTRALS.LIGHT_GREY}`,
}

export const INDEX_D_VESSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin-bottom: 40px;

  position: relative;

  & > :nth-child(1) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "title title title title"
      "cards cards cards cards"
      ". . . finalButton";

    & > :nth-child(1) {
      grid-area: title;
    }

    & > :nth-child(2) {
      grid-area: cards;
      padding-bottom: 4px;

      display: grid;
      grid-auto-flow: column;
      gap: 24px;

      & > * {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        display: grid;
        gap: 6px;

        padding-bottom: 24px;

        & > :nth-child(1) {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;

          overflow: hidden;
          width: 100%;

          position: relative;

          & > :nth-child(2) {
            position: absolute;
            right: 16px;
            bottom: 16px;
          }
        }

        & > *:not(:first-child) {
          padding-inline: 24px;
        }

        & > :nth-child(5) {
          font-weight: 600;
        }

        & > :nth-child(6) {
          display: grid;
          gap: 6px;

          margin-bottom: 24px;
        }
      }
    }

    & > :nth-child(3) {
      grid-area: finalButton;
      justify-self: flex-end;
    }
  }

  & > *:not(:first-child) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title title title"
      "cards cards cards"
      ". . finalButton";

    & > :nth-child(1) {
      grid-area: title;
    }

    & > :nth-child(2) {
      grid-area: cards;

      display: grid;
      grid-auto-flow: column;
      gap: 24px;

      & > * {
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
        border-radius: 8px;

        display: grid;

        padding-bottom: 24px;

        & > :nth-child(1) {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;

          overflow: hidden;
          width: 100%;

          position: relative;

          & > :nth-child(2) {
            position: absolute;
            right: 16px;
            bottom: 16px;
          }
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

        & > :nth-child(5),
        & > :nth-child(6) {
          padding-bottom: 32px;
        }
      }
    }

    & > :nth-child(3) {
      grid-area: finalButton;
      justify-self: flex-end;
    }
  }

  & > * {
    padding-top: 21px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${PROPS.HEIGHT};
      background-color: ${PROPS.BACKGROUND_COLOR};
    }

    & > :nth-child(2) {
      & > * {
        & > :last-child {
          margin-top: auto;

          margin-inline: 24px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;

          font-size: 12px;
          font-weight: 600;
          color: ${NEUTRALS.OFF_WHITE};
          line-height: 19.2px;
          letter-spacing: 0.256px;

          background-color: ${PRIMARY.PRIMARY_CTA};
          border-radius: 6.2px;
          border: none;

          padding: 9px 62px;

          cursor: pointer;
        }
      }
    }
  }
`
