import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { dialogCSS } from "@/components/inFront_D/styles/dialog"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Signup_D_Steps_TellUs_DialogWrapper = styled.dialog`
  ${dialogCSS()};

  border: none;
  border-radius: 8px;
  border: 2px solid ${NEUTRALS.BORDER};

  & > div {
    display: grid;
    padding: 24px 32px;
    gap: 8px;

    & > :nth-child(1) {
      margin-left: auto;
    }

    h6 {
      font-size: 20px;
      font-weight: 600;
    }

    & > :nth-child(4) {
      padding: 24px 12px;
      border: 2px solid ${NEUTRALS.DARK_GREY_2};
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
  }
`
