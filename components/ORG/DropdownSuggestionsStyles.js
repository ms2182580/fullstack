import styled from "styled-components"
import { NEUTRALS } from "../../assets/Colors"

export const DropdownSuggestionsWrapper = styled.div`
  & > div > div:nth-last-child(1) {
    border: ${NEUTRALS.OFF_WHITE} 2px solid;
    height: 16px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  & > div > div > div {
    padding: 1.5rem;
  }

  & > div > div > div:hover {
    background-color: ${NEUTRALS.DARK_GREY};
    color: ${NEUTRALS.OFF_WHITE};
  }
`
