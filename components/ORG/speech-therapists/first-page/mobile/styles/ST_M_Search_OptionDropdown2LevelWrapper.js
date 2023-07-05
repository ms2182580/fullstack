import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ST_M_Search_OptionDropdown2LevelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  & > :nth-child(1) {
    padding: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;

    & > :nth-child(2) {
      text-align: left;
      width: 100%;
    }
  }

  & > .ORGDropdownSuggestion {
    top: 100%;
    background-color: ${NEUTRALS.OFF_WHITE};
    width: 100%;

    & > p,
    & > a > p {
      padding: 0.5rem 1.5rem;
      cursor: pointer;
    }

    & > p:hover,
    & > a > p:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }

    & > :nth-last-child(1) {
      height: 0.5rem;
    }
  }

  & > .ORGDropdownComingSoon {
    top: 100%;
    background-color: ${NEUTRALS.OFF_WHITE};
    cursor: pointer;
    width: 100%;

    & > div {
      & > :nth-child(1) {
        height: 0.375rem;
        background-color: ${NEUTRALS.BLACK};
      }

      & > p {
        margin: 1rem;
      }
    }
  }
`
