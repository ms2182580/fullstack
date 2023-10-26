import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_ContactUsWrapper = styled.aside`
  border-radius: 8px;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);

  padding-bottom: 52px;

  & > *:not(:first-child) {
    margin-inline: 24px;
  }

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }

  & > :nth-child(1) {
    padding-inline: 24px;
    padding-top: 24px;
    padding-bottom: 24px;
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & > :nth-child(3),
  & > :nth-child(4) {
    display: flex;
    justify-content: space-between;

    column-gap: 32px;

    & > * {
      width: 100%;

      & > :nth-child(1) {
        font-size: 20px;
        font-weight: 600;

        span {
          font-size: 16px;
        }
      }

      & > :nth-child(2) {
        width: 100%;

        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 24px;
        padding-right: 24px;

        border-radius: 8px;
        border: 1px solid ${NEUTRALS.BLACK};
      }
    }
  }

  & > :nth-child(5) {
    & > :nth-child(2) {
      resize: none;

      width: 100%;

      border-radius: 8px;
      border: 1px solid ${NEUTRALS.BLACK};

      padding-top: 17px;
      padding-bottom: 25px;
      padding-left: 20px;
      padding-right: 20px;
    }
    & > :nth-child(3) {
      display: flex;
      justify-content: flex-end;
      margin-right: 8px;
      margin-top: 8px;

      color: ${NEUTRALS.DARK_GREY};
    }
  }

  & > :last-child {
    display: flex;
    align-items: center;
    gap: 46px;

    & > :nth-child(1) {
      border: 2px solid ${NEUTRALS.LIGHT_GREY};

      padding-top: 8px;
      padding-bottom: 8px;
      padding-inline: 48px;
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 8px;

      color: ${NEUTRALS.LIGHT_GREY};

      background-color: ${NEUTRALS.OFF_WHITE};

      cursor: not-allowed;
    }

    & > :nth-child(2) {
      cursor: pointer;

      font-weight: 600;
      color: ${PRIMARY.PRIMARY_CTA};
      font-size: 18px;
    }
  }
`
