import styled, { css } from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

type Props = {
  contactUsCustomValue: boolean
  textBesideButton_isLikeButton: boolean
  sendMessageButton: boolean
}

export const ORG_D_Detail_ContactUsWrapper = styled.section<Props>`
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
    gap: 4px;

    display: ${({ contactUsCustomValue }) => (contactUsCustomValue ? "none" : "grid")};

    & > :nth-child(2) {
      list-style: none;
      padding: 19px 22px;

      display: flex;
      align-items: center;
      flex-wrap: wrap;

      gap: 18px;

      border: 1px solid ${NEUTRALS.BLACK};
      border-radius: 8px;

      & > * {
        text-transform: capitalize;

        padding: 5px 10px;
        background-color: ${NEUTRALS.LIGHT_GREY};
        border-radius: inherit;
      }
    }
  }

  & > :nth-child(6) {
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

    & > * {
      height: 54px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: default;
    }

    ${({ textBesideButton_isLikeButton }) =>
      textBesideButton_isLikeButton
        ? css`
            & > * {
              padding-inline: 48px;
            }
          `
        : css`
            & > :nth-child(1) {
              padding-inline: 48px;
            }
          `}

    & > :nth-child(1) {
      border: 2px solid ${NEUTRALS.LIGHT_GREY};

      border-radius: 8px;

      gap: 8px;

      color: ${NEUTRALS.LIGHT_GREY};

      background-color: ${NEUTRALS.OFF_WHITE};

      font-weight: 600;
      font-size: 16px;

      ${({ sendMessageButton }) =>
        sendMessageButton &&
        css`
          flex-direction: row-reverse;

          border-color: ${PRIMARY.PRIMARY_CTA};
          color: ${PRIMARY.PRIMARY_CTA};
        `}
    }

    & > :nth-child(2) {
      font-weight: 600;
      color: ${PRIMARY.PRIMARY_CTA};
      font-size: 18px;

      ${({ textBesideButton_isLikeButton }) =>
        textBesideButton_isLikeButton &&
        css`
          border: 2px solid ${PRIMARY.PRIMARY_CTA};

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background-color: ${PRIMARY.PRIMARY_CTA};
          color: ${NEUTRALS.OFF_WHITE};
        `}
    }
  }
`
