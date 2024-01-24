import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../assets/Colors"

export const Home_Survey_DWrapper = styled.form`
  padding-top: 157px;
  padding-bottom: 157px;
  padding-inline: clamp(8px, 20vw - 180px, 134px);

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .LEFT {
    & > :nth-child(2) {
      font-size: 16px;
      line-height: 170%;
      margin-bottom: 164px;
    }

    & > :nth-child(3) {
      margin-bottom: 55px;

      & > :nth-child(1) {
        margin-bottom: 8px;
      }

      & > :not(:first-child) {
        line-height: 170%;
      }
    }

    & > :nth-child(4) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 23px;

      & > :nth-child(2) {
        display: flex;
        align-items: center;

        margin-left: 12px;

        gap: 32px;

        & > * {
          cursor: pointer;
          transition: all 100ms linear;

          &:hover,
          &:focus {
            scale: 1.3;
          }

          & > * {
            fill: ${PRIMARY.PRIMARY_CTA};
          }
        }

        & > :last-child {
          scale: 1.3;

          cursor: pointer;
          transition: all 100ms linear;

          &:hover,
          &:focus {
            scale: 1.6;
          }
        }
      }
    }

    & > :nth-child(3),
    & > :nth-child(4) {
      & > :nth-child(1) {
        font-size: 18px;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: 0.18px;
      }
    }
  }

  .RIGHT {
    padding-top: 82px;
    padding-bottom: 160px;
    padding-inline: 37px;

    background: rgba(196, 196, 196, 0.29);
    border-radius: 14px;

    display: grid;
    gap: 27px;

    & > * {
      display: grid;
      border: none;

      & > :nth-child(1) {
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 0.2px;

        color: ${NEUTRALS.BLACK};
      }

      & > :nth-child(2) {
        padding: 10px;
        border-radius: 8px;
        border: 1px solid ${NEUTRALS.BLACK};

        &::placeholder {
          font-style: italic;
        }
      }
    }

    & > :nth-last-child(2) {
      & > :nth-child(2) {
        height: 100px;
        resize: none;
      }

      & > :nth-child(3) {
        margin-top: 8px;
        margin-left: auto;

        color: ${NEUTRALS.DARK_GREY};
      }
    }

    & > :last-child {
      justify-self: flex-start;
      padding: 10px 24px;
      border-radius: 8px;
      border: 1px solid ${NEUTRALS.BLACK};

      font-size: 16px;

      cursor: pointer;
    }
  }
`
