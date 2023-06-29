import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../assets/Colors"

export const TooltipDesktopWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > :nth-child(1) {
    cursor: pointer;
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      position: absolute;
      top: 29px;
      left: -7px;
      border-style: solid;
      border-width: 0 16.5px 28px 16.5px;
      border-color: transparent transparent ${NEUTRALS.OFF_WHITE} transparent;
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
    }

    & > :nth-child(2) {
      width:600px;
      position: absolute;
      background-color: ${NEUTRALS.OFF_WHITE};
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      z-index: 2;
      top: 56px;
      right:-72px;
      border-radius: 8px;
      padding: 16px 32px;
      /* width:100%; */
    }
  }

  /* & > :nth-child(1) {
    margin-right: 16px;
  }
  & > :nth-child(2) {
    position: relative;
    display: flex;
  } */
  /* 
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
    visibility: visible;
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
  } */
`
