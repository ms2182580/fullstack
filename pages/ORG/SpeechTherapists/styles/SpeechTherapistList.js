import styled from "styled-components";
import { NEUTRALS } from "../../../../assets/Colors";

const SpeechTherapistListWrapper = styled.div`
  /* border: hsl(318, 83.3%, 47.1%) solid 3px; */
  background-color: ${NEUTRALS.LIGHT_GREY};
  padding: 0 6rem;  
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  grid-template-areas:
    "filter SPList"
    "filter buttons";
  
  
  & > :nth-child(1){
    grid-area: filter;
    /* outline: 8px crimson solid; */
  }
  & > :nth-child(2){
    grid-area: SPList;
    
    /* outline: 8px rebeccapurple solid; */
  }
  & > :nth-child(3){
    grid-area: buttons;
  /* outline: 8px green solid; */
  }
  
  
`

export default SpeechTherapistListWrapper
