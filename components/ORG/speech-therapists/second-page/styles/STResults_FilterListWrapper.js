import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"

export const STResults_FilterListWrapper = styled.div`
  visibility: ${(x) => (x.mustShowFiltersDesktop ? `visible` : `hidden`)};
  
  
  

  /* display: ${(x) => (x.mustShowFiltersMobile || x.isMobile === undefined ? "block" : "none")}; */
  background-color: ${NEUTRALS.OFF_WHITE};
  /* border: ${(x) => (x.isMobile ? "none" : `1px solid ${NEUTRALS.DARK_GREY}`)}; */
  border: 1px solid ${NEUTRALS.DARK_GREY};
  border-radius: 8px;
  /* box-shadow: ${(x) => (x.isMobile ? "none" : `0px 2px 4px rgba(0, 0, 0, 0.25)`)}; */
  /* padding: ${(x) => (x.isMobile ? "50px 0px 0px 0px" : `1.5rem 2rem 48px 2rem`)}; */
  /* padding:26px 26px 48px 48px; */
  /* width: ${(x) => (x.isMobile ? "100%" : "895px")}; */
  width: 940px;
  /* width:100%; */
  
  /* isolation:isolate; */

  position: absolute;
  z-index: 99;
  /* top:200px; */
  top: calc(487px + 112px);
  /* left: 270px; */
  left: 50%;
  /* left: calc(40vw - 30%); */
  transform: translateX(-50%);
  /* right:50%; */
`
