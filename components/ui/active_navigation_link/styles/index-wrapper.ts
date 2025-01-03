import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled, { css } from "styled-components"

export type ActiveNavigationLinkWrapperProps = {
  isActive: boolean
  isDisabledRoute?: boolean
}

export const ActiveNavigationLinkWrapper = styled.li<ActiveNavigationLinkWrapperProps>`
  list-style: none;

  & > a {
    width: 100%;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 16px;
    color: ${NEUTRALS.BLACK};

    &:is(:hover, :focus-visible) {
      background-color: ${({ isActive }) =>
        !isActive && `${NEUTRALS.BORDER_HOVER}`};
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${NEUTRALS.BORDER};

      & > a {
        & > svg {
          & > path {
            fill: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
          }
        }
      }
    `}

  ${({ isDisabledRoute }) =>
    isDisabledRoute &&
    css`
      & > a {
        cursor: not-allowed;

        color: ${NEUTRALS.DARK_GREY_3};
        font-weight: 400;

        position: relative;

        & > svg {
          & > path {
            fill: currentColor;
          }
        }

        &:is(:hover, :focus-visible) {
          background-color: transparent;
          outline: none;

          &::after {
            content: attr(data-content);
            position: absolute;

            left: 0;
            top: -50%;
            left: 18%;

            width: max-content;
            padding: calc(8px * 1);
            border-radius: 8px 8px 8px 0;

            background-color: ${NEUTRALS.DARK_GREY_3};
            color: white;
          }
        }
      }
    `}
`
