import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const Home_D_Step_NWrapper = styled.div`
  background-image: url("/background/background1.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position-y: 820px;

  padding-top: 56px;
  padding-bottom: 56px;
  display: grid;

  & > :nth-child(1) {
    padding-inline: 73px;
    display: grid;
    gap: 146px;

    & > :nth-child(1) {
      display: grid;
      gap: 20px;
    }

    & > :nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      & > :nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 97.2px;
        max-width: 500px;
        & > :nth-child(1),
        & > :nth-child(2),
        & > :nth-child(3) {
          height: 559px;
          object-fit: contain;
        }
      }
      & > :nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 1451px;
        // height: 100%;
        position: relative;
        overflow: hidden;
        & > :nth-child(1) {
          position: absolute;
          z-index: 0;
          top: 15px;
        }
        & > :nth-child(2),
        & > :nth-child(3),
        & > :nth-child(4) {
          z-index: 10;
          margin-bottom: -1px;
        }
      }
      & > :nth-child(3) {
        display: flex;
        flex-direction: column;
        gap: 97.2px;
        & > :nth-child(1),
        & > :nth-child(2),
        & > :nth-child(3) {
          & > :nth-child(1) {
            & > :nth-child(1) {
              font-size: 200px;
              font-weight: 600;
              line-height: 140px;
              color: #ae79c366;
            }

            & > :nth-child(2) {
              padding-left: 71px;
              max-width: 560px;
              opacity: 0.7;
              & > :nth-child(1) {
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 27px;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: ${NEUTRALS.DARK_GREY_3};
                margin-bottom: 10.8px;
              }
              & > :nth-child(2) {
                font-style: normal;
                font-weight: 600;
                font-size: 28.8px;
                line-height: 43px;
                color: #1d1a1e;
                margin-bottom: 3.6px;
              }
              & > :nth-child(3) {
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                color: #3a343c;
                margin-bottom: 90px;
              }
              & > :nth-child(4) {
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 8px 16px;
                gap: 8px;
                background: #ffffff;
                border: 1.5px solid #6e3a82;
                border-radius: 8px;
                & > :nth-child(1) {
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  gap: 8px;
                  font-style: normal;
                  font-weight: 600;
                  font-size: 16px;
                  line-height: 27px;
                  color: #6e3a82;
                }
              }
              & > :nth-child(5) {
                margin-top: 24px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 12px 0px;
                gap: 12px;
                border-radius: 8px;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 27px;
                color: #6e3a82;
              }
            }
          }
        }
      }
    }
  }
`
