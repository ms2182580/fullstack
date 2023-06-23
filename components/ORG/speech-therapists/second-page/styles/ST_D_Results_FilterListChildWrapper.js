import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"

export const ST_D_Results_FilterListChildWrapper = styled.div`
  visibility: ${(x) => (x.mustShowFiltersDesktop ? `visible` : `hidden`)};
  pointer-events: ${(x) => (x.ORGShowFullMapFilter ? `all` : ``)};
  user-select: ${(x) => (x.ORGShowFullMapFilter ? `all` : ``)};

  background-color: ${NEUTRALS.OFF_WHITE};
  border: 1px solid ${NEUTRALS.DARK_GREY};
  border-radius: 8px;
  width: 940px;

  position: absolute;
  z-index: 99;
  top: calc(181px);
  left: 50%;
  transform: translateX(-50%);
`
