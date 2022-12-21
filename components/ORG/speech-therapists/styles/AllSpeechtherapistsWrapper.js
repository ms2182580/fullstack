import styled from "styled-components"
import { NEUTRALS} from "../../../../assets/Colors"

const STFiltersTherapistsButtonsWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 2rem 6rem;
  display: grid;
  grid-template-columns: 1fr 10fr;
  
  
  grid-template-areas:
    "filter list"
    "filter buttons";

  & > :nth-child(1) {
    grid-area: filter;
    align-self: start;
  }
  & > :nth-child(2) {
    grid-area: list;
    height:100%;
  }

  & > :nth-child(3) {
    grid-area: buttons;
  }
`

export default STFiltersTherapistsButtonsWrapper
