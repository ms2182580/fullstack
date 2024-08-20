import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const MasterHome_D_Comment_NWrapper = styled.div`
  background-image: url("/background/background2.svg");
  background-repeat: no-repeat;
  background-size: 100% auto;

  padding-top: 77px;
  padding-bottom: 100px;

  display: grid;
  & > :nth-child(1) {
    display: grid;
    gap: 80px;

    & > :nth-child(1) {
      display: grid;
      gap: 20px;

      & > :nth-child(1) {
        font-size: 20px;
        font-weight: 600;
      }
      & > :nth-child(2) {
        font-size: 32px;
        font-weight: 600;
        line-height: 48px;
      }
    }

    & > :nth-child(2) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;

      & > :nth-child(1),
      & > :nth-child(2),
      & > :nth-child(3) {
        background-color: white;
        padding: 16px;
        border: 1.5px solid ${NEUTRALS.BORDER};
        border-radius: 12px;

        & > :nth-child(1) {
          display: flex;
          flex-direction: column;

          p {
            font-size: 16px;
            line-height: 26px;
            max-width: 306px;
            color: ${NEUTRALS.DARK_GREY_2};
            margin: auto;
          }

          & > :nth-child(3) {
            margin-left: auto;
            transform: rotate(-180deg);
          }
        }

        & > :nth-child(2) {
          padding-left: 12%;
          & > :nth-child(2) {
            color: ${PRIMARY.LIGHT_MAROON};
          }
        }
      }
    }
  }
  & > :last-child {
    margin-top: 48px;
    display: flex;
    justify-content: flex-end;
    & > :nth-child(2) {
      max-width: fit-content;
    }
  }
`
