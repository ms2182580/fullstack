import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

const paddingLeftFirstColumn = "48px"

export const PVES_General_D_PublicAssistanceApplicantsWrapper = styled.section`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &:has(details[open]) {
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  }

  &:has(details:not([open])) {
    box-shadow: none;
  }

  details {
    & > :nth-child(1) {
      list-style: none;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      padding: 24px;
      background-color: ${PRIMARY.PRIMARY_BACKGROUND};

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 46px;

      & > :nth-child(2) {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${NEUTRALS.OFF_WHITE};

        outline: 2px solid ${PRIMARY.PRIMARY_CTA};
        border-radius: 8px;
      }

      &:hover,
      &:focus-visible {
        background-color: hsl(282.9, 41.2%, 94.3%);
      }
    }

    &[open] {
      border-radius: 8px;

      summary {
        background-color: hsl(282.9, 41.2%, 91.3%);

        & > :nth-child(2) {
          transform: rotate(180deg);
        }
      }
    }

    & > :nth-child(2) {
      margin-inline: 46px;
      padding-bottom: 84px;

      position: relative;
      padding: 16px;

      & > :nth-child(1) {
        display: grid;
        gap: 8px;

        & > :nth-child(1) {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        & > :nth-child(2) {
          font-size: 18px;
          margin-bottom: 24px;

          span {
            color: ${SEMANTICS.HYPERLINK_NORMAL};
            text-decoration: underline;
            cursor: pointer;

            &:hover,
            &:focus-visible {
              color: hsl(220, 60%, 45%);
            }
          }
        }
      }

      & > :nth-child(2) {
        border-radius: 8px;

        display: grid;
        place-items: center;

        ul {
          border: 1px solid ${NEUTRALS.LIGHT_GREY};

          list-style: none;
          border-radius: inherit;

          & > :nth-child(1) {
            background-color: ${PRIMARY.PRIMARY_CTA};
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;

            color: ${NEUTRALS.OFF_WHITE};

            font-size: 18px;

            & > :nth-child(1) {
              padding-left: ${paddingLeftFirstColumn};
            }

            & > *:not(:first-child) {
              margin-inline: auto;
            }
          }

          & > *:not(:nth-child(1)) {
            & > :nth-child(1) {
              padding-left: ${paddingLeftFirstColumn};
            }

            & > *:not(:first-child) {
              margin-inline: auto;
            }
          }

          & > * {
            display: grid;
            align-items: center;

            grid-template-columns: 2fr 1fr 1fr;

            padding-top: 16px;
            padding-bottom: 16px;

            font-weight: 600;
          }

          & > :nth-child(odd):not(:first-child) {
            background-color: rgba(211, 214, 215, 0.2);
          }
        }
      }
    }
  }
`
