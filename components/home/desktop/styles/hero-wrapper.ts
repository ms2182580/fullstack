import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Hero_Wrapper = styled.section`
  display: grid;
  gap: 56px;
  padding-top: 77px;

  & > :nth-child(1) {
    padding-inline: 106px;
    p {
      display: grid;
      gap: 32px;
    }

    & > :last-child {
      margin-top: 56px;
      display: flex;
      flex-direction: column;
      max-width: 558px;
      gap: 12px;

      & > :nth-child(1) {
        & > :nth-child(2) {
          display: flex;
          gap: 24px;

          & > :nth-child(1) {
            width: 413px;
            align-self: stretch;
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid ${PRIMARY.LIGHT_MAROON};
          }
          & > :nth-child(2) {
            width: 130px;
            ${reusableButton({})};
          }
        }
      }
      & > :nth-child(2) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        & > :nth-child(1) {
          height: 1px;
          width: 100%;
          background: ${NEUTRALS.BORDER};
        }
        & > :nth-child(3) {
          height: 1px;
          width: 100%;
          background: ${NEUTRALS.BORDER};
        }
      }
      & > :nth-child(3) {
        border: 1px solid ${PRIMARY.LIGHT_MAROON};
        background-color: white;
        cursor: pointer;
        & > :nth-child(1) {
          display: flex;
          gap: 10px;
          color: ${NEUTRALS.DARK_GREY_2};
          font-weight: 400;
        }
      }
    }
  }
  & > :nth-child(2) {
    position: relative;
    & > :nth-child(1) {
      margin: auto;
      max-width: 85%;
    }
    & > :nth-child(2) {
      width: 100% !important;
      margin-top: -4rem;
    }
  }
`
