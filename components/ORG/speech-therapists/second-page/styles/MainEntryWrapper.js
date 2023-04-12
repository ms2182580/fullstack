import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const MainEntryWrapper = styled.div`
  position: relative;
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header header"
    "filterAndMap filterAndMap"
    "btns btns"
    "breadcrumbsAndUpdate breadcrumbsAndUpdate";

  & > :nth-child(1) {
    grid-area: header;
    align-self: start;
  }

  & > :nth-child(2) {
    grid-area: filterAndMap;
    display: grid;
    grid-template-columns: ${(x) => (x.showFullMapButton ? `1fr` : `2fr 1fr`)};
    margin-bottom: ${(x) => (x.showFullMapButton ? `318px` : `222px`)};
  }

  & > :nth-child(3) {
    grid-area: btns;
    display: ${(x) => (x.showFullMapButton ? `none` : ``)};
  }

  & > :nth-child(4) {
    grid-area: breadcrumbsAndUpdate;
    margin-right: 40px;
  }

  /* .Infront {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(44, 42, 42, 0.61);
    border: 2px solid crimson !important;
    
  } */

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "filter sortBy"
      "list list"
      "btns btns";
    padding: 0;
  }
`
