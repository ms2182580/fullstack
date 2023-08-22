import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../../assets/Colors"

export const MH_D_Results_MainEntryWrapper = styled.div`
  position: relative;
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header "
    "filterAndMap "
    "btns"
    "breadcrumbsAndUpdate ";

  padding-bottom: 40px;

  & > :nth-child(1) {
    grid-area: header;
    align-self: start;
  }

  & > :nth-child(2) {
    grid-area: filterAndMap;
    display: grid;
    grid-template-columns: ${(x) => (x.ORGshowFullMapButton ? `1fr` : `2fr 1fr`)};
    margin-bottom: ${(x) => (x.ORGshowFullMapButton ? `318px` : `189px`)};
    
    margin-left: clamp(16px, calc(10vw - 80px), 96px);
  }

  & > :nth-child(3) {
    grid-area: btns;
    display: ${(x) => (x.ORGshowFullMapButton ? `none` : ``)};
  }

  & > :nth-child(4) {
    grid-area: breadcrumbsAndUpdate;
  }
  
  & > :nth-child(3),
  & > :nth-child(4){
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);
  }
  
  

  /* @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "filter sortBy"
      "list list"
      "btns btns";
    padding: 0;
  } */
`
