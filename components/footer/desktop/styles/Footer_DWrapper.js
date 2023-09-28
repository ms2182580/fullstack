import styled from "styled-components"
import { NEUTRALS, PRIMARY, SECONDARY_SNT } from "../../../../assets/Colors"

export const Footer_DWrapper = styled.footer`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  position: relative;

  & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
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
        padding: 6px 16px;
        width: 98px;
        background-color: ${NEUTRALS.OFF_WHITE};
        border-radius: 12px;

        font-size: 18px;
        font-weight: 600;
        color: ${PRIMARY.PRIMARY_CTA};

        border: 2px solid rgba(108, 108, 108, 0.65);

        position: relative;

        &::after {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(255, 255, 255, 0.65);
          border-radius: inherit;
        }

        /* &:hover {
          color: ${NEUTRALS.OFF_WHITE};
          background-color: ${PRIMARY.PRIMARY_CTA};
        } */
      }
    }
  }

  & > :nth-child(2) {
    display: flex;
    justify-content: space-between;

    padding-bottom: 24px;

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
  }

  & > :nth-child(3) {
    border: 2px solid ${PRIMARY.PRIMARY_HOVER};
    border-radius: 50px;
    margin-inline: clamp(16px, calc(10vw - 80px), 96px);
  }

  & > :nth-child(4) {
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

  & > :nth-child(5) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
    padding-top: 8px;
    padding-bottom: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${PRIMARY.PRIMARY_HOVER};

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
`
