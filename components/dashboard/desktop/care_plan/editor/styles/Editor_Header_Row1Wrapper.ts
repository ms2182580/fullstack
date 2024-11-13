import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const Editor_Header_Row1Wrapper = styled.div`
  padding: 18px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > header {
    display: flex;
    align-items: center;
    gap: 16px;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      font-weight: 500;

      & > input {
        max-width: 400px;
        height: 44px;

        padding-inline: 1px;

        margin-left: auto;

        font-size: 20px;

        border: none;
        border-radius: 8px;

        transition: width 0.2s ease;

        font-size: 20px;
        font-weight: 500;

        :is(:hover, :focus-visible) {
          outline: 4px solid ${SEMANTICS.FOCUS_RING};
        }
      }
    }
  }

  & > button {
    ${reusableButton({ secondary: true })};
    display: flex;
    gap: 8px;

    :is(:hover, :focus-visible) {
      & > svg {
        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }

    :is(:hover, :focus-visible, :not(:hover), :not(:focus-visible)) {
      & > svg {
        & > * {
          transition: fill 0.1s ease-in-out;
        }
      }
    }
  }
`
