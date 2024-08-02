import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const ORG_D_Detail_HelpfulWebResourcesWrapper = styled.section`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: cornflowerblue;

  &:has(details[open]) {
    border-radius: 8px;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  }

  &:has(details:not([open])) {
    box-shadow: none;
  }

  details {
    &[open] {
      border-radius: 8px;

      summary {
        background-color: hsl(282.9, 41.2%, 91.3%);

        & > :nth-child(2) {
          transform: rotate(180deg);
        }
      }
    }

    & > summary {
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

    & > :nth-child(2) {
      position: relative;
      padding-inline: clamp(8px, 2vw - 12px, 16px);
      padding-bottom: 16px;

      & > :nth-child(1) {
        display: flex;

        position: relative;
        gap: 10%;

        & > :nth-child(1) {
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          margin: auto;
        }

        & > :nth-child(2) {
          width: 100%;
          padding: 10px 10px 10px 60px;

          background: ${NEUTRALS.OFF_WHITE};
          border-radius: 16px;
          border: 1px solid ${NEUTRALS.BLACK};

          &[type="text"]:focus {
            border: 1px solid transparent;
          }
        }

        & > button {
          ${reusableButton({ secondary: true })};
        }
      }

      & > :nth-child(2) {
        display: flex;
        flex-direction: column;

        & > * {
          padding: 32px 16px;

          display: grid;
          row-gap: 16px;
        }

        & > *:not(:last-child) {
          border-bottom: 1px solid ${NEUTRALS.LIGHT_GREY};
        }

        img {
          width: 321px;
          height: 64px;

          object-fit: contain;
        }

        ul {
          p {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          & > :nth-child(3) {
            margin-top: 16px;

            width: fit-content;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 6px 32px;

            border-radius: 8px;
            border: 2px solid ${NEUTRALS.DARK_GREY};

            text-decoration: none;
            color: ${NEUTRALS.DARK_GREY};
            font-weight: 600;

            background-color: ${NEUTRALS.LIGHT_GREY};
          }
        }
      }

      & > :last-child {
        width: fit-content;
        margin-left: auto;
        color: ${SEMANTICS.HYPERLINK_NORMAL};
        font-weight: 600;
        text-decoration: underline;
        cursor: default;
      }
    }
  }
`
