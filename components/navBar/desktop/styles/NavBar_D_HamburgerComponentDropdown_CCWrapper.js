import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_HamburgerComponentDropdown_CCWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 100%;

  padding: 24px 35px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 26px;

  background-color: ${NEUTRALS.OFF_WHITE};
  border-radius: 8px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  width: 100%;

  cursor: default;

  & > * {
    width: fit-content;
    width: 100%;

    text-decoration: underline 3px transparent;

    background-color: ${NEUTRALS.OFF_WHITE} !important;
    color: ${NEUTRALS.BLACK} !important;

    cursor: pointer;

    position: relative;

    &:hover,
    &:focus {
      &:after {
        content: attr(data-content);
        position: absolute;

        overflow: hidden;
        user-select: none;
        pointer-events: none;

        left: 0;
        bottom: 0;
        width: max-content;
        background-color: ${PRIMARY.PRIMARY_CTA};
        height: 3px;

        border-radius: 100px;
      }
    }
  }
`
