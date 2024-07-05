import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled, { css, keyframes } from "styled-components"

const hideElement = keyframes`
0% {
    transform: translateY(-20%);
    opacity:1;
  }
  150% {
    transform: translateY(20%);
    opacity:0;
  }
  
`

const showElement = keyframes`
0% {
    transform: translateY(0px);
    opacity:0;
  }
  100% {
    transform: translateY(-20%);
    opacity:1;
  }

`

type Props = {
  showQRCode: boolean
  shouldShowCopyLink: string
}

export const ORG_D_Detail_ShareModalWrapper = styled.div<Props>`
  cursor: default;
  padding: 100px 60px;

  display: flex;
  flex-direction: column;

  & > :nth-child(1) {
    display: grid;
    justify-items: center;

    & > :nth-child(2) {
      margin-top: 16px;

      width: 115px;
      height: 86px;

      border-radius: 10px;
    }

    & > :nth-child(3) {
      margin-top: 24px;
    }
  }

  & > :nth-child(2) {
    padding-top: calc(8px * 5);

    ${({ showQRCode }) =>
      showQRCode
        ? css`
            & > div {
              position: relative;

              display: grid;
              justify-items: center;

              & > :nth-child(1) {
                position: absolute;
                top: 0px;
                left: 0px;

                display: flex;
                gap: 8px;

                span {
                  color: hsl(220, 60%, 50%);
                }
              }

              & > :nth-child(2) {
                border: 2px solid black;
                border-radius: 8px;
                padding: 16px;
              }

              & > :nth-child(3) {
                margin-top: 24px;
              }
            }
          `
        : css`
            & > div {
              ul {
                list-style: none;

                display: grid;

                grid-template-columns: repeat(4, 1fr);
                column-gap: 24px;
                row-gap: 32px;
              }
              & > :last-child {
                ${reusableButton({})}

                width: 236px;
                margin-top: 32px;
                margin-inline: auto;
              }
            }
          `}
  }

  .shouldShowCopyLinkTrue {
    animation: 700ms ${showElement} linear forwards;
  }
  .shouldShowCopyLinkFalse {
    animation: 700ms ${hideElement} linear;
  }

  .shouldShowCopyLinkDefault {
    display: ${({ shouldShowCopyLink }) =>
      shouldShowCopyLink === "shouldShowCopyLinkDefault" ? "none" : "flex"};

    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 13px;

    width: 363px;
    padding: 18px;

    border-radius: 16px;
    background-color: ${NEUTRALS.OFF_WHITE};
    border: 1px solid #151a26;
    opacity: 0;

    position: absolute;
    z-index: 6;

    bottom: 0%;

    h4 {
      color: #151a26;
      font-size: 20px;
      font-weight: 500;

      text-transform: lowercase;

      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`
