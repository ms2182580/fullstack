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
  padding-top: 42px;
  padding-left: 24px;
  /* padding-left: 3rem; */
  position: relative;

  & > :nth-child(1) {
    position: absolute;
    right: 33px;
    top: 27px;
    cursor: pointer;
  }

  & > :nth-child(2) {
    margin-bottom: 12px;
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;

    & > :nth-child(1) {
      margin-right: 16px;
    }
    & > :nth-child(2) {
      position: relative;
      /* background-color: aquamarine; */
    }
    
    & > :nth-child(2):before{
      content:"";
      visibility: hidden;
      position: absolute;
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      top:27px;
      right:-7px;
      border-style: solid;
      border-width: 0 16.5px 28px 16.5px;
      border-color: transparent transparent ${NEUTRALS.OFF_WHITE} transparent;
    }

    & > :nth-child(2) > :nth-child(1) {
      cursor: pointer;
    }
    & > :nth-child(2) > :nth-child(2) {
      visibility: hidden;
      outline: 4px solid ${NEUTRALS.LIGHT_GREY};
      position: absolute;
      background-color: ${NEUTRALS.OFF_WHITE};
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      top: 54px;
      right: -80px;
      width: 600px;
      z-index: 99;
      border-radius: 8px;
      padding: 16px 32px;
    }

    & > :nth-child(2) > :nth-child(2) > :nth-child(1) {
      color: ${PRIMARY.PRIMARY_HOVER};
    }
    
    & > :nth-child(2) > :nth-child(2) > *{
      padding-bottom: 8px;
    }
    

    & > :nth-child(2):hover > :nth-child(2), & > :nth-child(2):hover:before {
      visibility: visible;
      /* position: absolute; */
    }
  }
`
