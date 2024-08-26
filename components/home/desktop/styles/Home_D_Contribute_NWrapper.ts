import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const Home_D_Contribute_NWrapper = styled.div`
  background-color: #fff8f5;
  padding-top: 56px;
  padding-bottom: 56px;
  display: grid;

  @media (max-width: 1430px) {
    padding-inline: 20px;
  }

  & > :nth-child(1) {
    display: grid;
    gap: 24px;
    padding-left 98px;
    padding-right: 42px;

    @media (max-width: 1040px) {
      padding-left: 80px;
    }


    & > :nth-child(1) {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
    }
    & > :nth-child(2) {
      font-size: 32px;
      font-weight: 600;
      line-height: 48px;
    }
    & > :nth-child(3) {
      display: flex;
      gap: 15px;
      justify-content: center;
      padding: 16px 0px;

      & > :nth-child(1),
      & > :nth-child(2),
      & > :nth-child(3) {
        background-color: white;
        padding: 48px;
        border: 1px solid ${NEUTRALS.OFF_WHITE_2};
        border-radius: 11px;
        display: grid;
        gap: 32px;
        @media (max-width: 1080px) {
          padding-inline: 38px !important;
        }

        & > :nth-child(1) {
          display: grid;
          gap: 8px;
          & > :nth-child(1) {
            font-size: 32px;
            font-weight: 600;
            line-height: 48px;
            max-width: 200px;
          }
        }
        & > :nth-child(2) {
          font-size: 40px;
          font-weight: 700;
          line-height: 60px;
          & > :nth-child(1) {
            font-size: 16px;
            font-weight: 500;
            line-height: 17.6px;
            letter-spacing: -0.2px;
            color: ${NEUTRALS.DARK_GREY_3};
          }
        }
        & > :nth-child(3) {
          max-width: fit-content;
        }
      }
    }
    & > :nth-child(4) {
      padding-top: 16px;
    }
  }
`
