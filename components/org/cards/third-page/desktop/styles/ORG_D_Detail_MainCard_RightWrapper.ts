import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const enum Layout_MainCardRight_KEY {
  KEY = "layout_MainCardRight",
}

export const enum Layout_MainCardRight_VALUES {
  DEFAULT = "DEFAULT",
  LIKE_COMMUNITY_CLASSES = "LIKE_COMMUNITY_CLASSES",
  LIKE_MENTAL_HEALTH = "LIKE_MENTAL_HEALTH",
  NO_HIGHLIGHT = "NO_HIGHLIGHT",
  ONE_HIGHLIGHT_AT_LEAST = "ONE_HIGHLIGHT_AT_LEAST",
  IS_PVES = "IS_PVES",
  DOUBLE_COLUMN_CARD = "DOUBLE_COLUMN_CARD",
  IS_PVES_SPECIFIC_DATA = "IS_PVES_SPECIFIC_DATA",
  TOOLTIP = "TOOLTIP",
}

export type Props = {
  [Layout_MainCardRight_KEY.KEY]?:
    | Layout_MainCardRight_VALUES.DEFAULT
    | Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES
    | Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH

  isBackend?: boolean
}

export const enum ORG_D_Detail_MainCard_Right_CLASSES {
  ADD_TO_CARE_PLAN_WITH_ICON = "ADD_TO_CARE_PLAN_WITH_ICON",
}

export const ORG_D_Detail_MainCard_RightWrapper = styled.section<Props>`
  display: grid;
  justify-self: stretch;
  grid-template-rows: auto 1fr;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 24px;
  position: relative;

  &.${Layout_MainCardRight_VALUES.DEFAULT} {
    .${Layout_MainCardRight_VALUES.DOUBLE_COLUMN_CARD} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "diag diag"
        "leftPart rightPart";
      grid-auto-flow: dense;
      margin-bottom: 24px;
      column-gap: clamp(20px, 1vw, 91px);

      & > :nth-child(1) {
        grid-area: diag;
      }

      & > :nth-child(2) {
        grid-area: leftPart;
      }

      & > :nth-child(3) {
        grid-area: rightPart;
      }

      & > :nth-child(1),
      & > :nth-child(2),
      & > :nth-child(3) {
        & > * {
          & > :nth-child(1) {
            font-weight: 700;
          }

          :not(:last-child) {
            margin-bottom: 24px;
          }
        }
      }
    }
  }

  &.${Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES} {
    .${Layout_MainCardRight_VALUES.DOUBLE_COLUMN_CARD} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto 1fr;
      gap: 24px;
      grid-template-areas:
        "diag rightPart"
        "leftPart rightPart";
      grid-auto-flow: dense;
      margin-bottom: 24px;
      column-gap: clamp(20px, 1vw, 91px);

      & > :nth-child(1) {
        grid-area: diag;
        align-self: flex-start;

        position: relative;

        & > * {
          margin-bottom: 0;
        }
      }

      & > :nth-child(2) {
        grid-area: leftPart;
      }

      & > :nth-child(3) {
        grid-area: rightPart;
      }

      & > :nth-child(1),
      & > :nth-child(2),
      & > :nth-child(3) {
        & > * {
          & > :nth-child(1) {
            font-weight: 700;
          }

          :not(:last-child) {
            margin-bottom: 24px;
          }
        }
      }
    }
  }

  &.${Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH} {
    .${Layout_MainCardRight_VALUES.DOUBLE_COLUMN_CARD} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "diag diag"
        "leftPart rightPart";
      grid-auto-flow: dense;
      margin-bottom: 24px;
      column-gap: clamp(20px, 1vw, 91px);

      & > :nth-child(1) {
        grid-area: diag;

        & > * {
          width: 100%;
        }
      }

      & > :nth-child(2) {
        grid-area: leftPart;
      }

      & > :nth-child(3) {
        grid-area: rightPart;
      }

      & > :nth-child(1),
      & > :nth-child(2),
      & > :nth-child(3) {
        & > * {
          & > :nth-child(1) {
            font-weight: 700;
          }

          :not(:last-child) {
            margin-bottom: 24px;
          }
        }
      }
    }
  }

  & > :nth-child(1) {
    & > :nth-child(1) {
      position: absolute;
      right: 24px;
      top: 24px;
      cursor: default;

      display: grid;
      grid-template-columns: 1fr;

      gap: 16px;

      & > :nth-child(1),
      & > :nth-child(2) {
        text-align: center;
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      gap: 16px;

      h2 {
        font-weight: 700;
      }
    }

    & > :nth-child(3) {
      margin-bottom: 12px;

      p {
        color: ${NEUTRALS.DARK_GREY};
      }

      &.${Layout_MainCardRight_VALUES.IS_PVES} {
        & > :nth-child(1) {
          width: fit-content;

          cursor: pointer;

          text-transform: capitalize;
          position: relative;

          .${Layout_MainCardRight_VALUES.TOOLTIP} {
            position: absolute;

            width: max-content;

            background-color: #fff3b4;
            top: -150%;

            text-transform: lowercase;
            font-size: 14px;

            padding: 14px 10px;

            border-radius: 8px;

            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            &::first-letter {
              text-transform: capitalize;
            }

            & > :nth-child(2) {
              text-transform: uppercase;
            }

            &:after {
              content: "";
              position: absolute;
              top: 100%;
              left: 16%;

              border: 8px solid #fff3b4;
              border-color: #fff3b4 transparent transparent transparent;
            }
          }
        }

        & > *:not(:first-child) {
          color: ${NEUTRALS.DARK_GREY};
        }
      }
    }

    & > :nth-child(4) {
      margin-bottom: 16px;

      & > :nth-child(1) {
        margin-right: 16px;
      }

      & > :nth-child(2) {
        margin-right: 8px;
      }

      & > :nth-child(3) {
        text-decoration: underline;
        color: ${SEMANTICS.HYPERLINK_NORMAL};
        cursor: pointer;
      }
    }

    .NO_HIGHLIGHT {
      margin-bottom: 0px;
    }

    .ONE_HIGHLIGHT_AT_LEAST {
      margin-bottom: 44px;
    }

    & > :last-child:not(.NO_HIGHLIGHT) {
      margin-bottom: 64px;
      display: flex;
      flex-direction: column;
      row-gap: 16px;

      & > * {
        & > * {
          & > * {
            font-weight: 500;
          }
        }
      }

      & > :nth-child(2) {
        gap: 24px;
      }
    }
  }

  .${Layout_MainCardRight_VALUES.IS_PVES_SPECIFIC_DATA} {
    margin-bottom: 42px;

    h4 {
      color: ${PRIMARY.PRIMARY_HOVER};
      font-weight: 700;
    }

    & > :nth-child(2) {
      margin-bottom: 32px;
    }

    ul {
      list-style: none;

      span {
        color: ${SEMANTICS.HYPERLINK_NORMAL};
        text-decoration: underline;

        cursor: pointer;
      }
    }
  }

  & > :last-child {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      padding: 8px 32px;

      border-radius: 8px;

      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      background: ${PRIMARY.PRIMARY_CTA};

      color: ${NEUTRALS.OFF_WHITE};

      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.24px;
      text-transform: capitalize;

      &:hover,
      &:focus-visible {
        background-color: ${PRIMARY.PRIMARY_HOVER};
        border-color: ${PRIMARY.PRIMARY_HOVER};
        color: ${NEUTRALS.OFF_WHITE};
      }
    }

    & > :nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover,
      &:focus-visible {
        cursor: pointer;
        filter: brightness(90%);
      }
    }
  }

  ${({ isBackend }) =>
    isBackend &&
    css`
      & > :nth-child(2) {
        & > ul {
          list-style: none;

          display: grid;
          gap: 24px;

          & > * {
            width: fit-content;

            position: relative;

            padding: 16px;

            font-weight: 600;

            &:before {
              content: "";
              position: absolute;
              inset: 0;
              background-color: ${NEUTRALS.LIGHT_GREY};
              opacity: 0.8;
              border-radius: 16px;
            }
          }
        }
      }

      & > :last-child {
        & > :nth-child(1) {
          gap: 16px;
        }
      }
    `}
`
