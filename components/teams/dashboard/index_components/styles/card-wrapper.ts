import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled, { css } from "styled-components"

type Props = {
  buttonIsPrimary: boolean
}

export const CardWrapper = styled.article<Props>`
  padding-block: calc(8px * 6.75);
  padding-inline: 24px;
  box-shadow: 0px 4px 10px 0px var(--box-shadow-color, #f0eef1);
  border-radius: 24px;

  display: grid;
  gap: 10px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;

    font-size: 28px;

    & > :nth-child(1) {
      & > * {
        & > * {
          fill: ${NEUTRALS.DARK_GREY_2};
        }
      }
    }

    & > :nth-child(2) {
      text-wrap: nowrap;
      margin-left: 10px;

      ${HeaderCSS()};
      font-size: 28px;
    }

    & > :nth-child(3) {
      margin-left: 12px;

      width: 48px;
      aspect-ratio: 1/1;

      rotate: 90deg;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};

      border: 2px solid ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};

      border-radius: 8px;

      & > svg {
        & > * {
          fill: var(--fill-color-svg, ${NEUTRALS.OFF_WHITE});
        }
      }

      ${({ buttonIsPrimary }) =>
        !buttonIsPrimary &&
        css`
          background-color: ${NEUTRALS.OFF_WHITE};

          & > svg {
            & > * {
              --fill-color-svg: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
            }
          }
        `}
    }
  }

  :is(:hover, :focus-visible) {
    --box-shadow-color: ${NEUTRALS.BORDER_HOVER};
  }
`
