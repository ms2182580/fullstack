import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"

export interface PROPS {
  widthOfDropdown?: number
}

export const NavBar_D_DropdownSuggestionWrapper = styled.div<PROPS>`
  position: absolute;
  width: ${(prop) => (prop.widthOfDropdown ? `${prop.widthOfDropdown}%` : `100%`)};
  z-index: 5;
  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`
