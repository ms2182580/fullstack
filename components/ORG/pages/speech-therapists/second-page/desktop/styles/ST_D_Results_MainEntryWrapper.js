import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"
import { device } from "../../../../../../assets/screenSizes/ScreenSizes"

export const ST_D_Results_MainEntryWrapper = styled.div`
  position: relative;
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header header"
    "filterAndMap filterAndMap"
    "btns btns"
    "breadcrumbsAndUpdate breadcrumbsAndUpdate";

  padding-bottom: 76px;

  & > :nth-child(1) {
    grid-area: header;
    align-self: start;
  }

  & > :nth-child(2) {
    grid-area: filterAndMap;
    display: grid;
    grid-template-columns: ${(x) => (x.ORGshowFullMapButton ? `1fr` : `2fr 1fr`)};
    margin-bottom: ${(x) => (x.ORGshowFullMapButton ? `318px` : `222px`)};
  }

  & > :nth-child(3) {
    grid-area: btns;
    display: ${(x) => (x.ORGshowFullMapButton ? `none` : ``)};
  }

  & > :nth-child(4) {
    grid-area: breadcrumbsAndUpdate;
    margin-right: 40px;
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
