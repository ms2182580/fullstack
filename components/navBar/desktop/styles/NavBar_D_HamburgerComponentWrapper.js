import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_HamburgerComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  z-index: 0;

  cursor: default;

  &:hover,
  &:focus-visible {
    & > :nth-child(1) {
      & > path {
        fill: ${PRIMARY.PRIMARY_HOVER};
      }
    }
  }

  & > :nth-child(1) {
    & > path {
      fill: ${({ showDropdown }) => showDropdown && `${PRIMARY.PRIMARY_CTA}`};
    }
  }
`
