import styled from "styled-components"
import { device } from "../../../../assets/screenSizes/ScreenSizes"

export const ST_TwoButtonsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  
  & > :nth-child(1){
    margin-right: 24px;
  }
  
  @media (${device.laptop}) {
    flex-direction: column;
    
    
    & > :nth-child(1){
    margin-right: 0px;
    margin-bottom: 8px;
  }
    
  }
  
`
