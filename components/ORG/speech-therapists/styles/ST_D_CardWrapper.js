import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const ST_D_CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "leftPart rightPart";
  align-items: stretch;

  border-radius: 8px;
  border: 1px solid ${NEUTRALS.LIGHT_GREY};
  
`

export const ST_D_CardWrapper_Left = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};
  grid-area: leftPart;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  
  
  
`

export const ST_D_CardWrapper_Left_LeftImage = styled.div`
  position: relative;
  overflow: hidden;
  border-top-left-radius: 8px;
  margin-bottom: 24px;

  & > :nth-child(2) {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`

export const ST_D_CardWrapper_Left_LeftInfo = styled.div`

  margin-left: 22px;
  margin-bottom: 16px;
  margin-right: 9px;

  & > *:not(:last-child) {
    margin-bottom: 24px;
  }
`

export const ST_D_CardWrapper_Right = styled.div`
  grid-area: rightPart;
  display: grid;
  justify-self: stretch;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${NEUTRALS.OFF_WHITE};
  padding-top: 16px;
  padding-left: 16px;
  position: relative;
  min-width: 394px;

  & > :nth-child(2),
  & > :nth-child(3),
  & > :nth-child(4),
  & > :nth-child(5) {
    align-self: center;
  }

  & > :nth-child(4) {
    margin-bottom: 8px;
  }

  & > :nth-child(5),
  & > :nth-child(6),
  & > :nth-child(7),
  & > :nth-child(8),
  & > :nth-child(9),
  & > :nth-child(10) {
    margin-bottom: 16px;
  }

  & > :nth-child(11) {
    margin-bottom: 56px;
  }

  & > :nth-child(1) {
    position: absolute;
    right: 18px;
    top: 27px;
    cursor: pointer;
  }

  & > :nth-child(2) {
    margin-right: 75px;
    & > span {
      white-space: pre;
    }
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

  & > div:nth-child(6),
  & > div:nth-child(7),
  & > div:nth-child(8),
  & > div:nth-child(9),
  & > div:nth-child(10) {
    margin-right: 24px;
  }

  & > :last-child {
    display: flex;
    align-items: center;
    margin-right: 17px;
    margin-bottom: 16px;
    justify-content: space-between;
  }
`
