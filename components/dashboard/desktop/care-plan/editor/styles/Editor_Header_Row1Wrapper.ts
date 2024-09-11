import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Editor_Header_Row1Wrapper = styled.div`
  padding: 18px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    display: flex;
    align-items: center;
    gap: 16px;

    & > input {
      width: 500px;
      height: 44px;

      font-size: 20px;

      border: none;
    }
  }

  & > button {
    ${reusableButton({ secondary: true })};
    display: flex;
    gap: 8px;

    &:hover,
    &:focus-visible {
      & > svg {
        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }

    &:hover,
    &:focus-visible,
    &:not(:hover),
    &:not(:focus-visible) {
      & > svg {
        & > * {
          transition: fill 0.1s ease-in-out;
        }
      }
    }
  }
`
