import styled from "styled-components"
import { EverySingleSpeechTherapistWrapper_Card } from "./EverySingleSpeechTherapistWrapper"

export const STDetail_CardWrapper = styled.div`
  padding-inline: 96px;
  padding-top: 40px;

  & > :nth-child(1) {
    margin-bottom: 0px;
  }
`

export const EverySingleSpeechTherapistWrapper_Card_Detail = styled(EverySingleSpeechTherapistWrapper_Card)`
  /* border: orange 2px solid; */

  /* grid-template-columns: 1fr 24px 2fr; */
  /* grid-template-areas: "leftPart rightPart"; */
  
  box-shadow: none;
  
  
  & > :nth-child(1){
    margin-right: 24px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    
  }
  
  & > :nth-child(2){
    border-radius: 8px;
  }
  
  
`
