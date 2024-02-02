import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const Footer_DWrapper = styled.footer`
  position: relative;
  margin-inline: auto;

  & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 56px);
    max-width: ${maxDesktopScreenSize};
    margin-inline: auto;
  }

  & > header {
    background-color: ${PRIMARY.PRIMARY_LOGO};

    display: flex;
    justify-content: center;
    gap: 32px;

    padding-top: 56px;
    padding-bottom: 56px;

    & > :nth-child(1) {
      color: ${NEUTRALS.OFF_WHITE};
      font-size: 28px;
      font-weight: 600;
      line-height: 48px;
    }
    & > :nth-child(2) {
      ${reusableButton({ secondary: true })}

      border-color: ${NEUTRALS.OFF_WHITE};

      &:hover,
      &:focus-visible {
        border-color: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }

  & > :nth-child(2) {
    background-image: url("/background/background3.svg");
    background-repeat: no-repeat;
    background-size: 100% auto;

    padding-top: 47px;

    display: flex;
    gap: 100px;

    padding-bottom: 220px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    & > :nth-child(2) {
      display: flex;
      column-gap: 129px;

      & > * {
        list-style: none;

        display: flex;
        flex-direction: column;
        gap: 16px;

        & > :nth-child(1) {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }

  & > :last-child {
    background-color: ${PRIMARY.PRIMARY_HOVER};

    & > :nth-child(1) {
      padding-inline: clamp(16px, calc(10vw - 80px), 96px);
      padding-top: 8px;
      padding-bottom: 8px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: ${maxDesktopScreenSize};
      margin-inline: auto;

      span {
        color: ${NEUTRALS.OFF_WHITE};
      }

      & > ul {
        display: flex;
        align-items: center;
        justify-content: center;

        & > :nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 87px;

          & > :nth-child(1) {
            & > * {
              fill: ${NEUTRALS.OFF_WHITE};
            }
          }

          & > :nth-child(2) {
            color: ${NEUTRALS.OFF_WHITE};
          }
        }
        & > :nth-child(2) {
          list-style: none;
          & > * {
            list-style: inherit;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;

            cursor: pointer;
          }
        }
      }
    }
  }
`
