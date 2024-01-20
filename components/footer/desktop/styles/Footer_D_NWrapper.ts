import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled from "styled-components"
import { NEUTRALS, PRIMARY, SECONDARY_SNT } from "../../../../assets/Colors"

export const Footer_D_NWrapper = styled.footer`
  background-image: url("/background/background3.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  /* background-color: ${PRIMARY.PRIMARY_BACKGROUND}; */
  position: relative;

  margin-inline: auto;

  & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
    max-width: ${maxDesktopScreenSize};
    margin-inline: auto;
  }

  & > :nth-child(1) {
    padding-top: 72px;
    padding-bottom: 148px;

    display: flex;
    gap: clamp(16px, calc(10vw - 80px), 127px);

    & > * {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: calc(8px * 3.5);

      & > :not(:first-child) {
        cursor: pointer;
      }
    }

    & > :nth-child(1) {
      & > :nth-child(4) {
        color: rgba(108, 108, 108, 0.65);
        cursor: default;
      }
    }

    & > :nth-child(2) {
      & > *:not(:first-child):not(:nth-child(2)) {
        color: rgba(108, 108, 108, 0.65);
        cursor: default;
      }
    }

    & > :nth-child(3),
    & > :nth-child(4) {
      & > * {
        color: rgba(108, 108, 108, 0.65);
        cursor: default;
      }
    }

    & > :nth-child(3) {
      & > :last-child {
        font-weight: 600;
      }
    }

    & > :nth-child(4) {
      & > :nth-child(2) {
        font-weight: 600;
      }

      & > :last-child {
        width: 163px;
        font-size: 18px;
        font-weight: 600;
        color: black;
        padding: 8px 48px;
        border-radius: 8px;
        background: var(--Light-Gray, #d3d6d7);

        position: relative;

        &::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.65);
          border-radius: inherit;
        }
      }
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;

    padding-bottom: 24px;

    position: relative;

    & > :nth-child(1) {
      border-radius: 8px;
      border: none;
      background-color: ${PRIMARY.PRIMARY_CTA};

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 24px;
      gap: 8px;

      cursor: pointer;

      & > :nth-child(2) {
        color: ${NEUTRALS.OFF_WHITE};
      }
    }

    & > :nth-child(2) {
      padding: 8px 48px;
      border: none;
      border-radius: 8px;
      background-color: ${SECONDARY_SNT.YELLOW};

      cursor: pointer;

      position: relative;
      z-index: 3;

      overflow: hidden;

      &::before {
        content: "";
        width: 0%;
        height: 100%;
        display: block;
        background: hsl(50.4, 100%, 69.2%);
        position: absolute;
        transform: skewX(-45deg);
        left: -10%;
        opacity: 1;
        top: 0;
        z-index: -12;
        transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
      }

      &::after {
        content: "";
        width: 0%;
        height: 100%;
        display: block;
        background: hsl(50.4, 100%, 49.2%);
        position: absolute;
        transform: skewX(-45deg);
        left: -10%;
        opacity: 0;
        top: 0;
        z-index: -15;
        transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
      }

      &:hover::before,
      &:focus::before {
        opacity: 1;
        width: 120%;
      }

      &:hover::after,
      &:focus::after {
        opacity: 1;
        width: 136%;
      }
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      width: calc(100% - clamp(16px, calc(10vw - 80px), 96px) * 2);
      height: 3px;
      border-radius: 50%;

      background: linear-gradient(
        90deg,
        hsla(255.9, 45.5%, 37.5%, 0.1) 1%,
        ${PRIMARY.PRIMARY_HOVER} 50%,
        hsla(255.9, 45.5%, 37.5%, 0.1) 99%
      );
    }
  }

  & > :nth-child(3) {
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 48px;

    & > :nth-child(1) {
      display: flex;
      gap: 8px;

      & > :nth-child(1) {
        font-size: 56px;
        font-weight: 900;
        line-height: 51px;
        letter-spacing: 2.24px;

        color: ${PRIMARY.PRIMARY_LOGO};
      }

      & > :nth-child(2) {
        & > * {
          fill: ${PRIMARY.PRIMARY_LOGO};
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

      & > :nth-child(1) {
        color: ${NEUTRALS.OFF_WHITE};
      }

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 87px;

        & > :nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;

          & > * {
            cursor: pointer;
          }
        }
      }
    }
  }
`
