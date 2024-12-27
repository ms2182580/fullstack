import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
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

    &:hover,
    &:focus-visible {
      background-color: ${({ isActive }) =>
        !isActive && `${SEMANTICS.NAVIGATION_HOVER_FOCUS}`};
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: ${SEMANTICS.NAVIGATION_ACTIVE};
    `}
`
