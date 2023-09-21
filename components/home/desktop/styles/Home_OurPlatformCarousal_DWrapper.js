import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const Home_OurPlatformCarousal_DWrapper = styled.div`
  padding-left: clamp(8px, 20vw - 180px, 120px);
  padding-top: 200px;
  padding-bottom: 200px;

  display: grid;
  grid-template-columns: 510px 1fr;
  grid-auto-flow: column;
  gap: 40px;

  background: #f0f2f8;

  .LEFT {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child):not(:nth-last-child(2)) {
      margin-bottom: 16px;
    }

    & > :nth-child(1) {
      font-size: 24px;
      color: ${NEUTRALS.DARK_GREY};
    }

    & > :nth-child(2) {
      letter-spacing: -0.48px;
    }

    & > :nth-last-child(2) {
      font-size: 20px;
      color: ${NEUTRALS.DARK_GREY};

      margin-bottom: 43px;
    }

    & > :last-child {
      padding: 16px 80px;
      background-color: ${PRIMARY.PRIMARY_CTA};
      color: ${NEUTRALS.OFF_WHITE};

      border-radius: 8px;

      align-self: flex-start;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      font-size: 24px;
      font-weight: 600;
    }
  }
`
