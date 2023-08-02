import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../assets/Colors"

export const ST_M_Search_OptionDropdown2LevelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  & > :nth-child(1) {
    padding: 16px 16px 16px 16px;
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
    background-color: ${NEUTRALS.OFF_WHITE};
    width: 100%;
    & > p,
    & > a > p {
      padding: 16px 16px 16px 24px;
      cursor: pointer;
    }

    & > p:hover,
    & > a > p:hover {
      background-color: ${NEUTRALS.DARK_GREY};
      color: ${NEUTRALS.OFF_WHITE};
    }
  }

  & > .ORGDropdownComingSoon {
    top: 100%;
    background-color: ${NEUTRALS.OFF_WHITE};
    cursor: pointer;
    width: 100%;

    & > div {
      & > p {
        margin: 1rem;
      }
    }
  }
`
