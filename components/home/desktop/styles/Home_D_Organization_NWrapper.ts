import { NEUTRALS, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import styled from "styled-components"

export const Home_D_Organization_NWrapper = styled.div`
  background-image: url("/background/background8.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-top: 56px;
  padding-bottom: 56px;
  display: grid;

  & > :nth-child(1) {
    display: grid;
    gap: 24px;
    padding-inline: 98px;

    & > :nth-child(1) {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
    }
    & > :nth-child(2) {
      font-size: 40px;
      font-weight: 600;
      line-height: 60px;
    }
    & > :nth-child(4) {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      align-items: center;
      gap: 3rem;
      width: 100%;
      align-items: end;
      padding-top: 80px;
      padding-bottom: 80px;

      & > :nth-child(1) {
        height: auto;
        width: 100%;
        object-fit: cover;
        margin-bottom: 2rem;
      }

      & > :nth-child(2) {
        & > :nth-child(1) {
          //   padding: 16px 0px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          height: auto;

          & > :nth-child(1),
          & > :nth-child(2),
          & > :nth-child(3),
          & > :nth-child(4) {
            background-color: white;
            padding: 60px 32px;
            border: 1.6px solid ${NEUTRALS.OFF_WHITE_2};
            border-radius: 11px;
            display: grid;
            gap: 32px;
            max-width: 354px;
            width: 100%;
            align-self: stretch;

            & > :nth-child(1) {
              display: grid;
              gap: 8px;
              & > :nth-child(2) {
                font-size: 18px;
                font-weight: 600;
                line-height: 26px;
              }
            }
            & > :nth-child(3) {
              max-width: fit-content;
            }
          }
        }
        & > :nth-child(2) {
          margin-top: 32px;
          margin-left: auto;
          margin-right: 4.5rem;
        }
      }
    }
  }
  & > :nth-child(2) {
    display: flex;
    margin-left: auto;
    margin-right: 98px;
    padding-inline: 98px;
    background-color: ${SECONDARY_ORG_PLUS.PINK_2};
    padding: 8px 16px;
    border-radius: 16px;
    gap: 11px;
    align-items: center;
  }
`
