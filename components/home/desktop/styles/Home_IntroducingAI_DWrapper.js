import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const Home_IntroducingAI_DWrapper = styled.div`
  padding-inline: clamp(8px, 20vw - 180px, 120px);
  padding-top: 300px;
  padding-bottom: 300px;

  background-color: #030b40;

  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 1fr;

  grid-auto-flow: column;

  gap: 60px;

  color: white;

  .LEFT {
    align-self: flex-end;
  }

  .RIGHT {
    display: grid;

    & > :nth-child(1) {
      font-size: 64px;
      font-weight: 700;
      line-height: 74px;
      letter-spacing: -2.56px;

      margin-bottom: 24px;
    }

    & > :nth-child(2) {
      color: #bac5d9;
      font-size: 24px;

      margin-bottom: 32px;
      font-weight: 500;

      & > span {
        font-weight: 700;
      }
    }

    & > :nth-child(3) {
      justify-self: flex-start;

      padding: 8px 80px;
      background-color: ${NEUTRALS.OFF_WHITE};

      border-radius: 8px;
      border: 1px solid ${NEUTRALS.DARK_GREY};

      cursor: pointer;

      color: ${NEUTRALS.DARK_GREY};
      font-size: 24px;
      font-weight: 600;
      line-height: 36px;
      letter-spacing: 0.72px;
    }
  }
`
