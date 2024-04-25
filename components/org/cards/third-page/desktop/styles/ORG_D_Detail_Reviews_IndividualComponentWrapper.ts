import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const enum ORG_D_Detail_Reviews_IndividualComponent_Classes {
  IS_COMPONENT = "IS_COMPONENT",
  IS_MODAL = "IS_MODAL",
}

const enum Tooltip_Vars {
  LEFT = "50%",
}

type Props = {
  isBackend?: boolean
}

export const ORG_D_Detail_Reviews_IndividualComponentWrapper = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  position: relative;

  ${({ isBackend }) =>
    isBackend &&
    css`
      padding-top: 16px;
      padding-bottom: 16px;
    `}

  & > * {
    border-radius: 8px;
    border: 1px solid ${PRIMARY.PRIMARY_BACKGROUND};
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    padding: 12px 16px 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);

    .${ORG_D_Detail_Reviews_IndividualComponent_Classes.IS_COMPONENT} {
      margin-top: auto;
      width: 100%;

      & > :nth-child(1) {
        display: flex;
        gap: 8px;
      }

      & > :nth-child(2) {
        display: flex;
        align-items: center;

        justify-content: space-between;

        font-weight: 400;
        font-size: 13px;
        font-style: italic;
        color: ${NEUTRALS.DARK_GREY};

        span {
          display: flex;
          align-items: center;
          gap: 3px;

          position: relative;
        }

        & > :nth-child(1) {
          /* 
          !FH
          THIS IS A MESS; SHOULD BE REMOVED
          
          Explanation: this code catch the last two words in the first card and apply to them a underline
           */
          & > :not(.FIRST_TWO) {
            &:after {
              content: "";
              position: absolute;
              bottom: 4px;
              width: 106%;
              height: 1px;
              background-color: gray;
            }
          }
        }

        & > :nth-child(2) {
          position: relative;

          color: ${NEUTRALS.BLACK};
          font-style: normal;
          font-size: 14px;

          &:before {
            content: attr(data-text);
            position: absolute;

            top: -100%;
            transform: translateY(-50%);

            left: ${Tooltip_Vars.LEFT};

            white-space: nowrap;
            background-color: ${NEUTRALS.OFF_WHITE};

            padding: 7px 12px;
          }

          &:after {
            content: "";
            position: absolute;
            top: -31%;
            transform: translateY(-50%);
            left: ${Tooltip_Vars.LEFT};

            border: 4px solid #000;
            border-color: white transparent transparent white;
          }

          &::after,
          &::before {
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            display: none;
          }

          &:hover:before,
          &:hover:after,
          &:focus-visible:before,
          &:focus-visible:after {
            display: block;
          }
        }
      }
    }

    .${ORG_D_Detail_Reviews_IndividualComponent_Classes.IS_MODAL} {
      & > :nth-child(1) {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: auto;
      }

      & > :nth-child(2) {
        display: none;
      }
    }
  }
`
