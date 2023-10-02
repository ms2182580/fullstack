import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const NavBar_D_HamburgerComponentDropdownWrapper = styled.div`
  position: absolute;
  z-index: 4;
  background-color: ${NEUTRALS.OFF_WHITE};
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  & > :nth-child(1) {
    list-style: none;

    & > * {
      padding: 26px;
      cursor: pointer;

      & > h4 {
        font-weight: 500;

        &::after {
          display: block;
          content: attr(data-content);
          font-weight: 700;
          height: 0;
          overflow: hidden;
          visibility: hidden;
          user-select: none;
          pointer-events: none;
        }
      }

      &:hover,
      &:focus {
        background-color: ${PRIMARY.PRIMARY_CTA};
        color: ${NEUTRALS.OFF_WHITE};

        & > :nth-child(1) {
          font-weight: 700;
        }

        & > * {
          color: ${NEUTRALS.OFF_WHITE};
        }
      }
    }

    & > :nth-child(1) {
      position: relative;
    }
  }

  & > :nth-child(2) {
    &::before {
      content: "";
      border: 1px solid ${NEUTRALS.LIGHT_GREY};
      height: 1px;
      width: 100%;
      position: absolute;
    }

    & > * {
      padding: 26px;

      display: grid;
      grid-template-columns: 25px 1fr;
      grid-template-areas: "icon text";

      gap: 10px;

      & > :nth-child(1) {
        grid-area: icon;
      }
      & > :nth-child(2) {
        grid-area: text;
      }

      & > h4 {
        border-bottom: 2px solid transparent;
        cursor: pointer;
        &:hover,
        &:focus {
          border-bottom: 2px solid ${PRIMARY.PRIMARY_CTA};
          & > * {
            border-bottom: 2px solid ${PRIMARY.PRIMARY_CTA};
          }
        }
      }
    }

    & > :last-child {
      & > h4 {
        grid-area: text;
      }

      &:hover {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
  }
`
