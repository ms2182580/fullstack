import styled from "styled-components"
import { device } from "../../../../../assets/screenSizes/ScreenSizes"

export const STResults_ChoisepathWrapper = styled.div`
  margin-right: 24px;

  display: ${(x) => (x.ORGshowFullMapButton || x.ORGShowFullMapFilter ? `none` : `block`)};

  & > *:not(:last-child) {
    margin-bottom: 52px;
  }
  
  

  @media (${device.laptop}) {
    margin-inline: 16px;
    margin-bottom: 64px;
  }
`
