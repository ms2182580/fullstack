import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import styled, { css } from "styled-components"

export type ActiveNavigationLinkWrapperProps = {
  isActive: boolean
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
`
