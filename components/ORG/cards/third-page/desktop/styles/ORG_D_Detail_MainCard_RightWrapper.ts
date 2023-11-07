import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

export const enum Layout_MainCardRight_KEY {
  KEY = "layout_MainCardRight",
}

export const enum Layout_MainCardRight_VALUES {
  DEFAULT = "DEFAULT",
  LIKE_COMMUNITY_CLASSES = "LIKE_COMMUNITY_CLASSES",
  LIKE_MENTAL_HEALTH = "LIKE_MENTAL_HEALTH",
}

export type Props = {
  [Layout_MainCardRight_KEY.KEY]?: Layout_MainCardRight_VALUES.DEFAULT | Layout_MainCardRight_VALUES.LIKE_COMMUNITY_CLASSES | Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH
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

    .NO_HIGHLIGHT {
      margin-bottom: 0px;
    }

    .ONE_HIGHLIGHT_AT_LEAST {
      margin-bottom: 44px;
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
  }

  & > :nth-child(3) {
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

      cursor: pointer;
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
`
