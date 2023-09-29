import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const NavBar_D_AccessibilityDropdownWrapper = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -1000%;
  z-index: 4;

  /* padding: 24px 0px; */
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: max-content;

  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: default;

  & > * {
    border: 1px solid transparent;
    cursor: pointer;

    color: ${NEUTRALS.LIGHT_GREY};

    display: flex;
    align-items: center;
    gap: 8px;

    margin-inline: 24px;
    padding-bottom: 24px;

    & > :nth-child(2) {
      color: ${NEUTRALS.DARK_GREY};
      font-weight: 500;
    }
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid ${NEUTRALS.DARK_GREY};
  }
`
