import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const NavBar_D_LanguageComponentDropdownWrapper = styled.div`
  position: absolute;
  z-index: 4;
  right: 0;
  top: 100%;

  background-color: ${NEUTRALS.OFF_WHITE};
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 24px;

  & > :nth-child(1) {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-inline: 24px;

    font-weight: 500;
    color: ${NEUTRALS.DARK_GREY};

    & > :nth-child(1) {
      & > * {
        fill: ${NEUTRALS.DARK_GREY};
      }
    }
  }

  & > :nth-child(2) {
    display: grid;
    gap: 24px;

    padding-bottom: 24px;

    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background-color: ${NEUTRALS.LIGHT_GREY};
      margin-inline: 24px;
    }

    & > * {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-inline: 24px;
    }

    & > :nth-child(1) {
      cursor: pointer;
    }

    & > :not(:first-child) {
      cursor: not-allowed;

      & > :nth-child(2) {
        color: ${NEUTRALS.LIGHT_GREY};
      }
    }
  }

  & > :nth-child(3) {
    padding-inline: 24px;
    & > :nth-child(1) {
      display: flex;
      align-items: center;
      gap: 11px;
      color: ${NEUTRALS.LIGHT_GREY};

      & > :nth-child(1) {
        & > * {
          stroke: ${NEUTRALS.LIGHT_GREY};
        }
      }
    }
  }
`
