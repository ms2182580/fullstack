import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import styled from "styled-components"

let leftMarginTags = "32px"
let rightMarginTags = "123px"

let leftMarginTagsLineBelow = "79px"
let rightMarginTagsLineBelow = "169px"

export const PCC_General_D_UsersAlsoViewedWrapper = styled.section`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding-bottom: 24px;

  & > :nth-child(1) {
    padding: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    margin-bottom: 66px;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & > :nth-child(2) {
    list-style: none;
    margin-left: ${leftMarginTags};
    margin-right: ${rightMarginTags};
    margin-bottom: 66px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;

    gap: 24px;

    position: relative;

    &:before {
      content: "";
      position: absolute;

      bottom: -38px;
      left: 0;
      right: 0;

      background-color: ${NEUTRALS.LIGHT_GREY};
      height: 1px;
      margin-left: calc(${leftMarginTagsLineBelow} - ${leftMarginTags});
      margin-right: calc(${rightMarginTagsLineBelow} - ${rightMarginTags});
    }

    & > * {
      border-radius: 16px;
      border: 2px solid ${PRIMARY.PRIMARY_CTA};
      background-color: ${NEUTRALS.OFF_WHITE};
      padding: 8px 16px;

      color: ${PRIMARY.PRIMARY_CTA};

      font-weight: 600;

      cursor: pointer;
    }

    & > :last-child {
      border: 2px solid ${NEUTRALS.DARK_GREY};
      background-color: ${NEUTRALS.LIGHT_GREY};
      color: ${NEUTRALS.DARK_GREY};

      cursor: not-allowed;
    }
  }

  & > :nth-child(3) {
    margin-left: 24px;
    margin-right: 84px;

    & > * {
      display: grid;
      grid-template-columns: auto 1fr;

      & > :nth-child(1) {
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        overflow: hidden;
        width: 391px;
        height: 232px;
        margin-right: 24px;
      }

      & > :nth-child(2) {
        margin-right: 8px;
        & > * {
          font-size: 18px;
        }

        & > :nth-child(1) {
          font-weight: 600;
          margin-bottom: 11px;
        }

        & > :nth-child(2) {
          margin-bottom: 9px;
          flex-direction: row-reverse;
          justify-content: flex-end;
        }

        & > :nth-child(3) {
          display: flex;
          justify-content: space-between;
          gap: 56px;

          & > :nth-child(1) {
            font-style: italic;
          }

          & > :nth-child(2) {
            align-self: flex-start;

            padding: 8px 48px;
            border: 2px solid ${NEUTRALS.DARK_GREY};
            border-radius: 8px;

            background-color: ${NEUTRALS.LIGHT_GREY};
            color: ${NEUTRALS.DARK_GREY};

            font-weight: 600;

            cursor: not-allowed;
          }
        }
      }
    }

    & > *:not(:last-child) {
      margin-bottom: 24px;
      position: relative;

      &:before {
        content: "";
        position: absolute;

        bottom: -12px;
        left: 0;
        right: 0;

        background-color: ${NEUTRALS.LIGHT_GREY};
        height: 1px;
      }
    }
  }

  & > :nth-child(4) {
    margin-right: 84px;
    margin-left: auto;
    width: fit-content;

    color: ${SEMANTICS.HYPERLINK_NORMAL};
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${SEMANTICS.FOCUS_RING};
    }
  }
`
