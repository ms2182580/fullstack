import { NEUTRALS, SECONDARY_ORG_PLUS } from "@/assets/Colors"
import styled, { FlattenSimpleInterpolation } from "styled-components"

type InputTagsWrapper_Props = {
  isInputFocused: boolean
  // shouldDropdownDisplayOnFocus: boolean
}

export const InputTagsWrapper = styled.div<InputTagsWrapper_Props>`
  position: relative;

  & > :nth-child(1) {
    display: grid;
    align-items: flex-start;
    gap: 8px;

    border: 1px solid #ccc;
    border-radius: 8px;

    padding: 12px 16px;

    overflow-y: auto;
    overflow-x: hidden;

    min-height: 95px;
    max-height: 350px;

    cursor: text;

    outline: ${({ isInputFocused }) =>
      isInputFocused ? "4px solid #64AFFB" : "none"};

    & > ul {
      list-style: none;

      display: flex;
      flex-wrap: wrap; /* Allow tags to wrap to a new line if necessary */
      align-items: flex-start; /* Center items vertically */

      gap: 8px;

      & > li {
        background-color: ${SECONDARY_ORG_PLUS.PINK_2}; /* Background color for tags */
        border-radius: 12px; /* Rounded corners */
        padding: 4px 8px; /* Padding inside each tag */
        /* margin-right: 5px;  */
        cursor: default;

        word-break: break-all;

        display: flex;
        gap: 8px;

        & > :nth-child(1) {
          &::first-letter {
            text-transform: capitalize;
          }
        }

        & > :nth-child(2) {
          color: ${NEUTRALS.DARK_GREY_2};
        }

        &:hover {
          filter: drop-shadow(0 0 8px crimson);
        }
      }
    }

    & > input {
      border: none;
      outline: none; /* Remove outline on focus */
      padding: 5px; /* Padding inside the input */
    }
  }

  & > :nth-child(2) {
    list-style: none;
  }

  & > * {
    /* outline: 2px solid crimson; */
  }
`

export type DropdownWrapper_Props = {
  dropdownStyles?: (() => FlattenSimpleInterpolation) | null
}

export const DropdownWrapper = styled.ul<DropdownWrapper_Props>`
  ${({ dropdownStyles }) => dropdownStyles && dropdownStyles()};
`

type DropdownShowOnInputWrapper_Props = {
  shouldDropdownDisplayOnFocus?: boolean
} & DropdownWrapper_Props

export const DropdownShowOnInputWrapper = styled(
  DropdownWrapper
)<DropdownShowOnInputWrapper_Props>`
  display: ${({ shouldDropdownDisplayOnFocus }) =>
    shouldDropdownDisplayOnFocus ? "" : "none"};
`

export type DropdownElementsWrapper_Props = {
  shouldBeSelected?: boolean
  elementStyles?: (() => FlattenSimpleInterpolation) | null
}

export const DropdownElementsWrapper = styled.li<DropdownElementsWrapper_Props>`
  ${({ shouldBeSelected, elementStyles }) =>
    shouldBeSelected && elementStyles && elementStyles()};
`
