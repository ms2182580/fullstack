import styled from "styled-components"
import { NEUTRALS, PRIMARY, SECONDARY_ORG_PLUS } from "../../../assets/Colors"

export const Home_ComingSoonAI_DWrapper = styled.div`
  padding-inline: clamp(8px, 20vw - 180px, 120px);
  padding-top: 152px;
  padding-bottom: 152px;

  display: flex;
  justify-content: space-between;

  grid-template-columns: 1fr 1fr;

  gap: 48px;

  .LEFT {
    display: grid;
    align-self: center;
    gap: 24px;

    max-width: 652px;

    & > :nth-child(1) {
      background-color: ${SECONDARY_ORG_PLUS.PINK};
      border-radius: 8px;
      width: fit-content;
      padding: 4px 8px;

      color: ${NEUTRALS.DARK_GREY};
      font-weight: 700;
    }

    & > :nth-child(2) {
      color: ${NEUTRALS.BLACK};
      font-size: 48px;
      font-weight: 600;
      line-height: 66px;
      letter-spacing: -0.48px;

      & > span {
        color: ${PRIMARY.PRIMARY_HOVER};
        font-weight: 700;
      }
    }

    & > :nth-child(3) {
      color: ${NEUTRALS.DARK_GREY};
      font-size: 20px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.1px;
    }

    & > :nth-child(4) {
      border-radius: 8px;
      border: 1px solid ${NEUTRALS.LIGHT_GREY};
      background: white;

      padding: 16px 80px;
      justify-self: flex-start;

      color: ${NEUTRALS.LIGHT_GREY};
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0.72px;

      cursor: not-allowed;
    }

    & > :nth-child(5) {
      display: flex;
      align-items: center;
      gap: 16px;
      position: relative;

      padding-top: 24px;

      & > :nth-child(1) {
        background-color: #fff4cb;
        width: 52px;
        height: 52px;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
      }

      & > :nth-child(2) {
        color: ${NEUTRALS.DARK_GREY};
        font-size: 18px;
        line-height: 30px;
        letter-spacing: 0.09px;

        & > span {
          color: #397adb;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
        }
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #eaeaea;
        top: 0px;
        left: 0;
        right: 0;
      }
    }
  }

  .RIGHT {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`
