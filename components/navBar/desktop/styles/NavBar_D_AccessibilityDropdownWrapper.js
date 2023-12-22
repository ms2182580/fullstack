import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const NavBar_D_AccessibilityDropdownWrapper = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: -1000%;
  z-index: 4;

  padding-top: 24px;
  padding-bottom: 24px;

  display: grid;

  gap: 24px;
  width: max-content;

  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: default;

  & > * {
    border: 1px solid transparent;

    color: ${NEUTRALS.LIGHT_GREY};

    display: flex;
    align-items: center;

    gap: 8px;

    margin-inline: 24px;

    & > :nth-child(2) {
      color: ${NEUTRALS.DARK_GREY};
      font-weight: 500;
    }

    &:hover,
    &:focus-visible {
      opacity: 0.8;
    }
  }
`
