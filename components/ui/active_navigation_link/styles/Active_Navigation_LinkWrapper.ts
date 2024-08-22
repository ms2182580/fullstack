import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import styled, { css } from "styled-components"

type Props = {
  isActive: boolean
  stylesForActive: any
}

export const Active_Navigation_LinkWrapper = styled.li<Props>`
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

  ${({ isActive, stylesForActive }) =>
    isActive &&
    css`
      ${stylesForActive()}

      & > * {
        ${stylesForActive()}
      }
    `}
`
