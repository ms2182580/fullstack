import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Organization_D_About_Oddy_NWrapper = styled.section`
  padding: 157px 120px;

  & > :nth-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 29px;

    & > :nth-child(1) {
      display: grid;
      gap: 37px;
      margin-bottom: auto;

      & > :nth-child(1) {
        display: grid;
        gap: 4px;

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
        & > :nth-child(1),
        & > :nth-child(2),
        & > :nth-child(3) {
          color: ${NEUTRALS.DARK_GREY_2};
        }
      }
    }
  }
`
