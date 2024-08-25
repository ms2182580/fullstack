import { NEUTRALS, PRIMARY, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import styled from "styled-components"

export const Home_D_AboutYou_NWrapper = styled.div`
  padding-top: 79px;
  padding-bottom: 79px;
  display: grid;
  position: relative;

  & > :nth-child(1) {
    display: flex;
    gap: 16px;
    background-color: #fff8f5;
    padding-left: 36px;
    padding-top: 34px;
    padding-bottom: 26px;
    margin-right: 138px;
    margin-left: 98px;

    & > :nth-child(1) {
      display: grid;
      gap: 10px;

      & > :nth-child(1) {
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
      }
      & > :nth-child(2) {
        font-size: 32px;
        font-weight: 600;
        line-height: 48px;
        max-width: 52%;
        word-spacing: 3.6px;
        word-break: break-word;
        @media (max-width: 1200px) {
          max-width: 48%;
        }
      }
      & > :nth-child(3) {
        display: grid;
        gap: 4px;
        margin-top: 6px;

        & > :nth-child(1) {
          color: ${NEUTRALS.DARK_GREY_2};
        }
        & > :nth-child(2) {
          max-width: 45%;
          align-self: stretch;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid ${PRIMARY.LIGHT_MAROON};
          &::placeholder {
            color: ${NEUTRALS.DARK_GREY_3};
            font-size: 16px;
            font-style: italic;
          }
        }
      }
      & > :nth-child(4) {
        margin-top: 34px;
        max-width: fit-content;
      }
    }
    & > :nth-child(2) {
      position: absolute;
      right: 3rem;
      top: 0;
      @media (max-width: 1200px) {
        right: 0.5rem;
      }
      @media (max-width: 1162px) {
        top: 2rem;
      }
    }
  }
`
