import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const Home_Hero_DWrapper = styled.div`
  margin-bottom: 158px;

  & > :nth-child(1) {
    padding-top: ${({ paddingTop }) => `calc(155px + ${paddingTop}px)`};

    background: linear-gradient(45deg, hsl(304.9, 45.7%, 58.1%, 0.5) 11%, hsl(18.8, 100%, 71.2%, 0.5) 55%, hsl(304.9, 45.7%, 64.1%, 0.58) 72%);

    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0%;
      left: 0;
      right: 0;
      width: 100%;

      height: 4%;
      background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 1) 78%);
    }

    & > :nth-child(1) {
      line-height: clamp(80px, 9vw, 130px);
      font-weight: 700;

      /* font-size: clamp(88px, 8vw, 120px); */
      /* font-size:127px; */

      font-size: clamp(88px, 9.7vw - 15px, 140px);

      text-align: center;
      letter-spacing: 1px;

      color: ${NEUTRALS.BLACK};

      margin-bottom: 54px;

      & > * {
        display: block;
      }

      .CHANGE_WORD {
        padding-right: 32vw;

        @media (min-width: 1200px) {
          padding-right: 25vw;
        }

        @media (min-width: 1430px) {
          padding-right: 18vw;
        }

        & > :nth-child(1) {
          position: relative;

          & > :nth-child(1) {
            position: absolute;
            left: calc(100% + 28px);
            vertical-align: middle;

            display: flex;
            align-items: center;

            top: 0;
            bottom: 0;

            color: ${PRIMARY.PRIMARY_CTA};

            white-space: nowrap; /* Keeps the content on a single line */

            /* &.word-transition {
              transition: opacity 0.5s;
            }

            &.fade-out {
              opacity: 0;
            }

            &.fade-in {
              opacity: 1;
            }*/
          }
        }
      }
    }

    & > :nth-child(2) {
      margin-inline: clamp(0px, 1vw, 138px);
      margin-bottom: 54px;

      text-align: center;

      font-size: clamp(31px, 3vw, 34px);
      color: ${NEUTRALS.DARK_GREY};
      font-weight: 400;

      & > * {
        display: block;
      }

      & > :nth-child(1) {
        & > :nth-child(1) {
          font-weight: 500;
        }

        & > :nth-child(2) {
          font-weight: 700;
        }
      }
    }

    & > :nth-child(3) {
      display: flex;
      align-items: center;
      justify-content: center;

      & > :nth-child(1) {
        padding: 16px 80px;
        border-radius: 8px;
        background-color: ${PRIMARY.PRIMARY_CTA};

        color: ${NEUTRALS.OFF_WHITE};
        text-decoration: none;

        font-size: 24px;
        font-weight: 600;
        position: relative;
        z-index: 1;
      }

      margin-bottom: 24px;
    }
  }

  & > :nth-child(2) {
    font-size: 18px;
    text-align: center;
    color: #3a3230;
  }
`
