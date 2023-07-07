import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_HamburgerComponentDropdownWrapper = styled.div`
  position: absolute;
  z-index: 1;
  /* left: clamp(16px, calc(10vw - 80px), 90px); */
  left:0;
  background-color: ${NEUTRALS.OFF_WHITE};
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > :nth-child(1) {
    list-style: none;

    & > * {
      padding: 26px;
      cursor: pointer;

      &:hover,
      &:hover h4 {
        background-color: ${PRIMARY.PRIMARY_CTA};
        color: ${NEUTRALS.OFF_WHITE};
      }
    }
    
    & > :last-child{
      &:hover{
        border-radius: 0 0 8px 8px;
      }
    }
    
  }
`
