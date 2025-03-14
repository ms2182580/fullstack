import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"

export const ORG_D_DropdownSuggestionWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 112px;
  z-index: 99;
  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`
