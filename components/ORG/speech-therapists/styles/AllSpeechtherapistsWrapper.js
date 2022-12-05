import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

const STFiltersTherapistsButtonsWrapper = styled.div`
  background-color: ${NEUTRALS.LIGHT_GREY};

  & > :nth-child(1) {
    padding: 2rem 6rem;
    display: grid;

    grid-template-areas:
      "filter list"
      "filter buttons";
  }

  & > :nth-child(1) > :nth-child(1) {
    grid-area: filter;
    align-self: start;
    margin-right: 72px;
    
  }
  & > :nth-child(1) > :nth-child(2) {
    grid-area: list;
  }

  & > :nth-child(1) > :nth-child(3) {
    grid-area: buttons;
  }
`

export default STFiltersTherapistsButtonsWrapper
