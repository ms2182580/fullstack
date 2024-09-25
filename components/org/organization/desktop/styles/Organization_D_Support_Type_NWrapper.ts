import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_Support_Type_NWrapper = styled.section`
  padding-top: 86px;
  padding-bottom: 86px;
  padding-inline: 47px;

  & > :nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 29px;

    & > :nth-child(2) {
      display: grid;
      gap: 32px;
      margin-bottom: auto;

      & > :nth-child(1) {
        display: grid;
        gap: 16px;
        & > :nth-child(1) {
          font-size: 18px;
        }
        & > :nth-child(2) {
          font-size: 32px;
          font-weight: 600;
          letter-spacing: 0.48px;
        }
      }

      & > :nth-child(2) {
        color: #6e6e6e;
      }

      & > :nth-child(3) {
        display: flex;
        justify-content: space-between;
        & > :nth-child(1),
        & > :nth-child(2) {
          display: grid;
          gap: 16px;
          & > :nth-child(1),
          & > :nth-child(2),
          & > :nth-child(3) {
            display: flex;
            gap: 16px;
            align-items: center;
            & > :nth-child(2) {
              color: ${NEUTRALS.DARK_GREY_2};
            }
          }
        }
      }
    }
  }
`
