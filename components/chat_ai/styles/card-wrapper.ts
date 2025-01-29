import { NEUTRALS, PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled, { css } from "styled-components"

type Props = {
  allowFocus?: boolean
}

export const CardWrapper = styled.li<Props>`
  min-width: 330px;

  border-radius: 14px;
  border: 1px solid ${NEUTRALS.BORDER};

  padding: calc(8px * 2);

  box-shadow: 0 4px 4px var(--box-shadow-color, hsl(0, 0%, 0%, 0.5));

  display: flex;
  flex-direction: column;
  gap: calc(8px * 2);

  position: relative;

  & > :nth-child(1) {
    svg {
      & > path {
        fill: ${PRIMARY.LIGHT_MAROON};
      }
    }
  }

  & > :nth-child(3) {
    list-style: none;
    display: grid;
    gap: calc(8px * 2);

    & > li {
      background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.YELLOW_2_50};
      padding: 4px 8px;
      border-radius: calc(8px * 3);

      color: ${NEUTRALS.BLACK_2};
    }
  }

  &:is(:hover, :focus-visible) {
    --box-shadow-color: hsl(0, 0%, 0%, 0.6);
  }

  ${({ allowFocus }) =>
    !allowFocus
      ? css`
          box-shadow: none;
          cursor: not-allowed;

          & > * {
            opacity: 0.4;
          }

          & > :nth-child(3) {
            & > li {
              background-color: hsl(0, 0%, 50.2%, 0.4);
            }
          }

          &::before {
            content: "";
            position: absolute;
            inset: 0;

            border-radius: inherit;
          }

          &:is(:hover, :focus-visible) {
            &::after {
              content: attr(data-content);
              position: absolute;
              z-index: 2;

              left: 0;
              top: -10%;
              left: 10%;

              width: max-content;
              padding: calc(8px * 1);
              border-radius: 8px 8px 8px 0;

              background-color: ${NEUTRALS.DARK_GREY_3};
              color: white;
            }
          }
        `
      : css``}
`
