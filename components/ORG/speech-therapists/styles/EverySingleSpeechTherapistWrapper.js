import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const EverySingleSpeechTherapistWrapper = styled.div`
  /* background-color: cornflowerblue; */
  width: 52rem;
`

export const EverySingleSpeechTherapistWrapper_Card = styled.div`
  /* background-color: purple; */
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "leftPart rightPart";

  /* border:purple 1px solid; */
  margin-bottom: 2rem;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  /* border-radius: 8px; */

  /* & > :nth-child(1) > :nth-child(1) > :nth-child(1){
    border: 7px gold solid;
  } */
`

export const EverySingleSpeechTherapistWrapper_Left = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  grid-area: leftPart;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 2rem 1.5rem;
  width: 21.5rem;
`

export const EverySPT_LeftImage = styled.div`
  border: 2px ${NEUTRALS.LIGHT_GREY} solid;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  margin-bottom: 2rem;

  & > div {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`

export const EverySPT_LeftInfo = styled.div`
  margin-left: 14px;
  margin-right: 14px;
`

export const EverySingleSpeechTherapistWrapper_Right = styled.div`
  grid-area: rightPart;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  
`
