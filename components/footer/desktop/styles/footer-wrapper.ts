import { NEUTRALS, PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled from "styled-components"

export const Footer_Wrapper = styled.footer`
  position: relative;
  margin-inline: auto;

  & > *:not(:last-child) {
    padding-inline: clamp(16px, calc(10vw - 80px), 56px);
    max-width: ${maxDesktopScreenSize};
    margin-inline: auto;
  }

  & > :nth-child(1) {
    background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.YELLOW_2};

    padding-top: 47px;

    display: flex;
    gap: 100px;

    padding-bottom: 220px;

    & > :nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      & > :nth-child(1) {
        position: relative;

        & > :nth-child(2) {
          position: absolute;
          top: 0.8rem;
          right: -3rem;
          font-weight: 600;
        }
      }
    }

    & > :nth-child(2) {
      display: flex;
      column-gap: 129px;

      & > * {
        list-style: none;

        display: flex;
        flex-direction: column;
        gap: 20px;

        & > :nth-child(1) {
          font-size: 20px;
          font-weight: 600;
        }
      }
      & > :last-child {
        & > :last-child {
          width: max-content;
          background-color: transparent;
          padding-inline: 24px;
        }
      }
    }
  }

  & > :last-child {
    background-color: ${PRIMARY.PRIMARY_CTA};

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
