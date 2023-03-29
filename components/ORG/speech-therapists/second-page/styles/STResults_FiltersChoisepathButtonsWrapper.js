import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STResults_FiltersChoisepathButtonsWrapper = styled.div`
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
    grid-template-columns: ${(x) => (x.showFullMap ? `1fr` : `2fr 1fr`)};
    margin-bottom: ${(x) => (x.showFullMap ? `calc(239px + 318px)` : `222px`)};
  }

  & > :nth-child(3) {
    grid-area: btns;
    display: ${(x) => (x.showFullMap ? `none` : ``)};
  }

  & > :nth-child(4) {
    grid-area: breadcrumbsAndUpdate;
    margin-right: 40px;
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
