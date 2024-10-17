import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
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
      & > input {
        width: 500px;
        height: 44px;

        font-size: 20px;

        border: none;
      }

      & > p {
        ${Paragraph({ color: "dark_gray_3" })}

        font-size: 12px;
        font-style: italic;
        line-height: normal;
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
