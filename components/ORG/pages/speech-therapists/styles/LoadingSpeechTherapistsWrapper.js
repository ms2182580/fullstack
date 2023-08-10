import styled from "styled-components"
import { NEUTRALS } from "../../../../../assets/Colors"

export const LoadingSpeechTherapistsWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: grid;
  align-self: start;
  margin-top: 5rem;
  padding-bottom: 4.978rem;
  & > * {
    justify-self: center;
  }

  & > :nth-child(1) {
    margin-bottom: 1.5rem;
  }

  & > :nth-child(2) {
    text-align: center;
    margin-bottom: 3rem;
  }
  & > :nth-child(3) {
    width: 10rem;
    margin-bottom: 3rem;
  }
  
  & > :nth-child(4){
    margin-inline: 24px;
    
    
  }
  
`
