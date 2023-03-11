import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const DropdownSuggestionsWrapper = styled.div`
  & > div > div:nth-last-child(1) {
    border: ${NEUTRALS.OFF_WHITE} 2px solid;
    height: 16px;
  }

  & > div > div > div {
    padding: 1.5rem;
  }

  & > div > :nth-child(2) {
    margin-top: ${(x) => (x.isFirstOrSecondDropdown ? `1.5rem` : `0px`)};
  }

  & > div {
    padding-top: 1.5rem;
  }

  & > div > span {
    padding: 1.5rem;
    font-weight: 700;
  }

  & > div > div > div:hover {
    background-color: ${PRIMARY.PRIMARY_CTA};
    color: ${NEUTRALS.OFF_WHITE};
    font-weight: 600;
  }
`

export const KeywordCities = styled.div`
  margin-top: -1.5rem;

  & > div > span {
    margin-left: 2.1rem;
    font-weight: 700;
  }

  & > svg {
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 1rem;
    left: 0.5rem;
  }
`
