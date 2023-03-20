import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"
import { device } from "../../../../../../assets/screenSizes/ScreenSizes"

export const STFiltersTherapistsButtonsWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-left: 96px;
  display: grid;
  grid-template-columns: 1fr;

  grid-template-areas:
    "header header"
    "filterAndMap filterAndMap"
    "btns btns";

  & > :nth-child(1) {
    grid-area: header;
    align-self: start;
  }
  & > :nth-child(2) {
    grid-area: filterAndMap;
    height: 100%;
    
    
    display: grid;
    grid-template-columns: 8fr 2fr;
    
    
  }

  & > :nth-child(3) {
    grid-area: btns;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "filter sortBy"
      "list list"
      "btns btns";
    padding: 0;
  }
`

