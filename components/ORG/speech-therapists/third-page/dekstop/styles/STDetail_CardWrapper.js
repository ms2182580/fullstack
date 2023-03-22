import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"
import { ST_CardWrapper } from '../../../styles/ST_CardWrapper'


export const STDetail_CardWrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 32px;
  
  & > :nth-child(1) {
    margin-bottom: 0px;
  }
`

export const STDetail_CardWrapper_Card_Detail = styled(ST_CardWrapper)`
  box-shadow: none;
  
  & > :nth-child(1) {
    margin-right: 24px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  }

  & > :nth-child(2) {
    border-radius: 8px;
  }
`

export const STDetail_CardWrapper_Right_Detail = styled.div`
  display: grid;
  justify-self: stretch;
  grid-template-rows: auto 1fr;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-top: 42px;
  padding-left: 32px;
  position: relative;
  min-width: 792px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
`

export const STDetail_CardWrapper_FirstRow = styled.div`
  & > :nth-child(1) {
    position: absolute;
    right: 33px;
    top: 27px;
    cursor: pointer;
  }

  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4) {
    margin-bottom: 16px;
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;

    & > :nth-child(1) {
      margin-right: 16px;
    }
    & > :nth-child(2) {
      position: relative;
      display: flex;
    }

    & > :nth-child(2):before {
      content: "";
      visibility: hidden;
      position: absolute;
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      top: 27px;
      right: -7px;
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

    & > :nth-child(2) > :nth-child(2) > * {
      padding-bottom: 8px;
    }

    & > :nth-child(2):hover > :nth-child(2),
    & > :nth-child(2):hover:before {
      visibility: visible;
    }
  }

  & > :nth-child(5) {
    margin-bottom: 64px;
  }
`

export const STDetail_CardWrapper_SecondRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "leftPart rightPart";
  margin-inline-end: 24px;
  margin-bottom: 93px;
`

export const STDetail_CardWrapper_SecondRow_LeftPart = styled.div`
  grid-area: leftPart;
`
export const STDetail_CardWrapper_SecondRow_RightPart = styled.div`
  grid-area: rightPart;
`
