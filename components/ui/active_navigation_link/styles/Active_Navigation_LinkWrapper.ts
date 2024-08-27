import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import styled, { css, FlattenSimpleInterpolation } from "styled-components"

export type Active_Navigation_LinkWrapper_Props = {
  isActive: boolean
  stylesForActive: () => FlattenSimpleInterpolation
}

export const Active_Navigation_LinkWrapper = styled.li<Active_Navigation_LinkWrapper_Props>`
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
