import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const SBSG3_EditableDataWrapper = styled.li`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-areas:
    "label label"
    "defaultValue icon";

  font-size: 16px;
  color: ${NEUTRALS.BLACK_2};

  & > :nth-child(1) {
    grid-area: label;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  & > :nth-child(2) {
    grid-area: defaultValue;

    border: none;

    border-radius: 8px;

    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

    font-size: inherit;
    color: ${NEUTRALS.DARK_GREY_3};

    &:hover,
    &:focus-visible {
      background-color: ${PRIMARY.PRIMARY_CTA};
      color: ${NEUTRALS.OFF_WHITE};
    }
  }

  & > :nth-child(3) {
    grid-area: icon;

    & > svg {
      & > * {
        stroke: ${NEUTRALS.DARK_GREY_3};
      }
    }
  }
`
