import styled from "styled-components"
import { NEUTRALS, PRIMARY, SECONDARY_SNT } from "../../../../assets/Colors"

export const Footer_DWrapper = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  position: relative;

  & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
  }

  & > :nth-child(1) {
    padding-top: 72px;
    padding-bottom: 72px;

    display: flex;
    gap: clamp(16px, calc(10vw - 80px), 127px);

    & > * {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;

      & > :not(:first-child) {
        cursor: pointer;
      }
    }

    & > :nth-child(3) {
      & > :last-child {
        font-weight: 600;
        color: ${PRIMARY.PRIMARY_CTA};
      }
    }

    & > :nth-child(4) {
      & > :last-child {
        padding: 6px 16px;
        width: 98px;
        background-color: ${NEUTRALS.OFF_WHITE};
        border-radius: 12px;

        font-size: 18px;
        font-weight: 600;
        color: ${PRIMARY.PRIMARY_CTA};

        border: 2px solid ${PRIMARY.PRIMARY_CTA};
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

      & > :nth-child(1) {
        & > * {
          fill: white;
        }
      }

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
      &:hover::before {
        opacity: 1;
        width: 120%;
      }

      &:hover::after,
      &:hover::after {
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
        gap: 12px;

        & > * {
          cursor: pointer;
        }
      }
    }
  }
`
