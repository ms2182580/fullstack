import styled from "styled-components"
import { PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_HamburgerComponentWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  

  & > :nth-child(1) {
    & > path{
      fill:${({ showDropdown }) => showDropdown && `${PRIMARY.PRIMARY_CTA}`};
    }
  }
`
