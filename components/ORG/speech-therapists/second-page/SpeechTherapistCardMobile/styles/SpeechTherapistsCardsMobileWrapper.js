import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const SpeechTherapistsCardsMobileWrapper = styled.div`
  background-color: ${PRIMARY.PRIMARY_BACKGROUND};

  & > .card-container {
    position: relative;
  }

  article {
    cursor: pointer;
    transition: all 1s;
  }

  .card {
    user-select: none;
  }

  .card > :nth-child(1) {
    pointer-events: none;
  }

  & > :nth-child(1) > .activeCard > .card > :nth-child(1) > :nth-child(1) > :nth-child(1) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & > :nth-child(1) > .activeCard > .card > :not(:first-child) {
    padding-inline: 16px;
    margin-bottom: 8px;
  }
  & > :nth-child(1) > .activeCard > .card > :last-child {
    padding-bottom: 16px;
  }

  & > :nth-child(1) > .activeCard > .FirstPlace{
    width: 288px;
  }
  
  & > :nth-child(1) > .activeCard > .FirstPlace > :nth-child(1) {
    position: relative;
    

    & > :nth-child(2) {
      position: absolute;
      right: 5px;
      top: -16px;
    }
    & > :nth-child(3) {
      position: absolute;
      right: 8px;
      bottom: 14px;
    }
  }

  & > :nth-child(1) > .activeCard > .FirstPlace > :nth-child(2) {
    display: flex;
    white-space: nowrap;
    & > :nth-child(1) {
      margin-right: 8px;
    }
  }

  & > :nth-child(1) > .activeCard > .FirstPlace > :nth-child(3) {
    display: flex;

    & > :nth-child(1) {
      margin-right: 16px;
      text-align: left;
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
      top: -3px;
      right: 114px;
      border-style: solid;
      border-width: 28px 16.5px 0px 16.5px;
      border-color: ${NEUTRALS.OFF_WHITE} transparent transparent transparent;
    }

    & > :nth-child(2) > :nth-child(1) {
      cursor: pointer;
      width: 18px;
      height: 18px;
      position: absolute;
      bottom: 3px;
      left: -138px;
    }
    & > :nth-child(2) > :nth-child(2) {
      visibility: hidden;
      outline: 4px solid ${NEUTRALS.LIGHT_GREY};
      position: absolute;
      background-color: ${NEUTRALS.OFF_WHITE};
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      top: -261px;
      right: -77px;
      width: 300px;
      z-index: 99;
      border-radius: 8px;
      padding: 4px;
      text-align: center;
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

  & > :nth-child(1) > .activeCard > .FirstPlace > :nth-child(3) > :nth-child(1),
  & > :nth-child(1) > .activeCard > .FirstPlace > :nth-child(4) {
    white-space: nowrap;
  }
  
  & > :nth-child(1) > .activeCard > .FirstPlace > :nth-child(5){
    padding-right: 0px;
  }

  .prevCard {
    left: 0;
    opacity: 0;
    z-index: -1;
    position: absolute;
  }

  .activeCard {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .nextCard {
    left: 100px;
    opacity: 0;
    z-index: -1;
    position: absolute;
  }
`
