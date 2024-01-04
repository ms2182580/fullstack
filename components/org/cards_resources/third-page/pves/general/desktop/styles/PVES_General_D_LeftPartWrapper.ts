import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const enum TooltipDisplay {
  TOOLTIP_DISPLAY = "TOOLTIP_DISPLAY",
}

export const PVES_General_D_LeftPartWrapper = styled.div`
  margin-left: -22px;

  & > :nth-child(1) {
    display: grid;
    gap: 12px;

    margin-bottom: 12px;

    & > * {
      padding: 12px 48px;

      border-radius: 8px;

      border: 2px solid ${PRIMARY.PRIMARY_CTA};

      text-align: center;
      font-weight: 600;
      font-size: 16px;

      text-decoration: none;
      cursor: pointer;
    }

    & > :nth-child(1) {
      background: ${PRIMARY.PRIMARY_CTA};
      color: ${NEUTRALS.OFF_WHITE};

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 3px;

      text-transform: capitalize;

      & > span {
        display: flex;
        margin-bottom: 7px;
        position: relative;

        .${TooltipDisplay.TOOLTIP_DISPLAY} {
          position: absolute;
          /* bottom: 100%; */
          bottom: calc(150% + 16px);
          left: -475%;

          background-color: #fff3b4;
          color: ${NEUTRALS.BLACK};

          text-align: left;
          font-size: 14px;
          font-weight: 400;

          padding: 10px;
          border-radius: 6px;

          /* width: 520px; */

          display: flex;
          flex-direction: column;
          width: max-content;

          z-index: 1;

          filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

          list-style: none;

          & > * {
            display: block;
          }

          &:after {
            content: "";
            position: absolute;
            /* transform: translateY(-50%); */

            top: 100%;
            left: 10%;
            border: 16px solid transparent;
            border-color: #fff3b4 transparent transparent transparent;

            /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
          }
        }

        & > * {
          & > * {
            /* stroke: white; */
            /* fill: white; */
            /* background-color: white; */
            fill: white;
          }
        }
      }
    }

    & > *:not(:first-child) {
      color: ${PRIMARY.PRIMARY_CTA};

      & > span {
        color: ${SEMANTICS.HYPERLINK_NORMAL};
      }
    }
  }

  h4,
  p {
    text-transform: capitalize;
  }

  h4 {
    color: ${PRIMARY.PRIMARY_HOVER};
    font-weight: 700;
  }

  p {
    margin-bottom: 24px;
  }
`
