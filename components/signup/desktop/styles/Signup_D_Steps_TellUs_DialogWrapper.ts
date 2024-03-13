import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Signup_D_Steps_TellUs_DialogWrapper = styled.div`
  display: grid;
  gap: 8px;

  padding: 56px 32px 24px;

  h6 {
    font-size: 20px;
    font-weight: 600;
  }

  & > :nth-child(3) {
    padding: 24px 12px;
    border: 2px dotted ${NEUTRALS.DARK_GREY_2};
    border-radius: 16px;

    display: grid;
    justify-content: center;
    justify-items: center;

    margin-bottom: 32px;

    & > :nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 4px;

      margin-bottom: 12.5px;

      & > :nth-child(1) {
        width: 24px;
      }

      span {
        font-size: 16px;
        text-decoration: underline;

        color: ${PRIMARY.PRIMARY_CTA};
        cursor: default;

        &:hover,
        &:focus-visible {
          color: ${PRIMARY.PRIMARY_HOVER};
        }
      }
    }
  }

  & > button {
    ${reusableButton({})}

    width: fit-content;
  }
`
