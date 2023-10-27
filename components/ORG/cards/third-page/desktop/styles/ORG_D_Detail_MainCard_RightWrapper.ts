import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const enum Layout_MainCardRight_KEY {
  KEY = "layout_MainCardRight",
}

export const enum Layout_MainCardRight_VALUES {
  DEFAULT = "DEFAULT",
  LIKE_COMMUNITY_CLASSES = "LIKE_COMMUNITY_CLASSES",
  LIKE_MENTAL_HEALTH = "LIKE_MENTAL_HEALTH",
  LIKE_ATTORNEY = "LIKE_ATTORNEY",
}

export type Props = {
  [Layout_MainCardRight_KEY.KEY]?:
    | Layout_MainCardRight_VALUES.DEFAULT
    | Layout_MainCardRight_VALUES.LIKE_ATTORNEY
    | Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES
    | Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH
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
    & > :nth-child(2) {
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
    & > :nth-child(2) {
      display: grid;
      grid-template-columns: repeat(2, auto);
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

  &.${Layout_MainCardRight_VALUES.LIKE_ATTORNEY} {
    /* border: 2px solid green; */
  }

  &.${Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH} {
    /* border: 2px solid goldenrod; */
  }

  & > :nth-child(1) {
    & > :nth-child(1) {
      position: absolute;
      right: 24px;
      top: 24px;
      cursor: pointer;

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

    & > :nth-child(4) {
      margin-bottom: 12px;
      color: ${NEUTRALS.DARK_GREY};
    }

    & > :nth-child(5) {
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

    & > :last-child {
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

    .NO_HIGHLIGHT {
      margin-bottom: 0px;
    }

    .ONE_HIGHLIGHT_AT_LEAST {
      margin-bottom: 44px;
    }
  }

  & > :nth-child(3) {
  }

  & > :last-child {
    display: flex;
    justify-content: end;
    gap: 16px;

    & > :nth-child(2):hover {
      cursor: pointer;
      filter: brightness(90%);
    }
  }
`
