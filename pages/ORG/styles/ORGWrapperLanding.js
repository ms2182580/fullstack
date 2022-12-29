import styled from "styled-components"
import { NEUTRALS } from "../../../assets/Colors"
import { device } from "../../../assets/screenSizes/ScreenSizes"

const ORGWrapperLanding = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  place-items: center;
  
  
  
  
  

  padding: 3.08rem 3rem 0 3rem;

  & > :nth-child(1) {
    margin-bottom: 36px;
  }
  
  & > :nth-child(2){
    margin-bottom: 72px;
    /* outline: 2px solid crimson; */
    margin-inline:auto;
    text-align: center;
    /* white-space: nowrap; */
    /* width:100%; */
    
    /* font-size:clamp(1rem, -0.875rem + 8.333333vw, 48px); */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* align-items: center; */
    /* width:100%; */
    
    
    @media (${device.tablet}) {
       /* border: 7px solid green; */
      margin-bottom: 24px;
       
      
    }
    
    
  }
  
  @media (${device.tablet}){
    padding-inline: 16px;
    
    & > :nth-child(1) {
    margin-bottom: 16px;
  }
    
  }
  
`

export default ORGWrapperLanding
