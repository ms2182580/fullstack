import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { COLORS } from "@/components/ui/buttons/variables"
import styled, { css } from "styled-components"

type Props = {
  pathIsNewSearch: boolean
}

export const NewSearchButtonWrapper = styled.div<Props>`
  & > :nth-child(1) {
    ${reusableButton({ secondary: true })};

    margin-inline: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    width: 205px;
    padding-inline: 24px;

    & > svg {
      & > path {
        fill: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
        transition: all 0.1s ease-in-out;
      }
    }

    & > span {
      font-size: 20px;
      font-weight: 600;
    }

    &:is(:hover, :focus-visible) {
      & > * {
        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }

    ${({ pathIsNewSearch }) =>
      pathIsNewSearch &&
      css`
        background-color: ${COLORS.HoverBgColor};
        border-color: ${COLORS.HoverBgColor};
        color: ${COLORS.Primary.TextColor};

        & > :nth-child(1) {
          & > * {
            fill: ${NEUTRALS.OFF_WHITE};
          }
        }
      `}
  }
`
