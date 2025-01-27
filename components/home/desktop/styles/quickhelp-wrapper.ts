import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const QuickhelpWrapper = styled.div`
  background-image: url("/background/background7.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  padding-bottom: 18%;
  padding-top: 104px;

  & > :nth-child(1) {
    display: grid;
    gap: 24px;
    padding-inline: 96px;

    & > :nth-child(2) {
      font-size: 40px;
    }

    & > :nth-child(3) {
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      width: 100%;

      & > :nth-child(1) {
        height: auto;
        max-width: 506px;
        width: 100%;
        object-fit: cover;
      }

      & > :nth-child(2) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        height: auto;

        & > :nth-child(1),
        & > :nth-child(2),
        & > :nth-child(3),
        & > :nth-child(4) {
          background-color: white;
          border: 1px solid ${NEUTRALS.OFF_WHITE_2};
          padding: 33px 34px;
          border-radius: 12px;
          width: 322px;
          min-height: 354px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          & > :nth-child(1) {
            & > :nth-child(1) {
              margin-bottom: 24px;
            }
            & > :nth-child(2) {
              font-size: 24px;
              margin-bottom: 8px;
            }
            & > :nth-child(3) {
              line-height: 24px;
              color: ${NEUTRALS.DARK_GREY_2};
            }
          }
          & > :nth-child(2) {
            width: fit-content;
          }
        }
      }
    }
  }
`
