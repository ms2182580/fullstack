import styled from "styled-components"
import { device } from "../../../../../../../assets/screenSizes/ScreenSizes"

export const ST_D_Detail_TwoButtonsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  gap:24px;
  
  @media (${device.laptop}) {
    flex-direction: column;
    
    
    & > :nth-child(1){
    margin-right: 0px;
    margin-bottom: 8px;
  }
    
  }
  
`
