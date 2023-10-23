import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const NavBar_D_InfoDropdownWrapper = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  z-index: 3;

  padding: 33px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: max-content;

  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: default;
  list-style: none;

  & > li {
    & > * {
      border: 2px solid transparent;
      cursor: pointer;

      color: ${NEUTRALS.LIGHT_GREY};

      &:hover {
        border-bottom: 2px solid ${NEUTRALS.LIGHT_GREY};
      }
    }
  }
`
