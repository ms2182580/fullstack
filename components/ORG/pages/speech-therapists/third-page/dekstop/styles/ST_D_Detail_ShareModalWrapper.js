import styled, { keyframes } from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

const showElement = keyframes`
0% {
    transform: translateY(14px);
    opacity:0;
  }
  100% {
    transform: translateY(0px);
    opacity:1;
  }
  
`

const hideElement = keyframes`
0% {
    transform: translateY(0px);
    opacity:1;
  }
  100% {
    transform: translateY(14px);
    opacity:0;
  }

`

export const ST_D_Detail_ShareModalWrapper = styled.div`
  visibility: ${({ showModal }) => (showModal ? `visible` : `hidden`)};
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 612px;
  height: 600px;
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index: 5;
  cursor: default;
  padding: 48px 40px;
  border-radius: 8px;
  /* border: 2px solid crimson; */

  display: flex;
  flex-direction: column;

  & > :nth-child(1) {
    position: absolute;
    right: 29px;
    top: 26px;
    cursor: pointer;

    & > :nth-child(1) > path {
      fill: ${NEUTRALS.BLACK};
    }
  }

  & > :nth-child(2) {
    text-align: center;
    margin-bottom: 16px;
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 24px;

    & > :nth-child(1) {
      overflow: hidden;
      border-radius: 10px;
    }
  }

  & > :nth-child(4) {
    display: grid;
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: ${({ showQRCode }) => (showQRCode ? `1fr` : `repeat(2, 1fr)`)};
    justify-items: ${({ showQRCode }) => showQRCode ? `center` : ``};
    gap: 24px;
    
    & > p{
      width:${({ showQRCode }) => showQRCode ? `357px` : ``};
      
    }
    
  }

  .shouldShowCopyLinkTrue {
    animation: 700ms ${showElement} linear forwards;
  }
  .shouldShowCopyLinkFalse {
    animation: 700ms ${hideElement} linear;
  }

  .shouldShowCopyLinkDefault {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 13px;
    width: 363px;
    padding: 18px;
    border-radius: 8px;
    background-color: ${NEUTRALS.OFF_WHITE};
    border: 1px solid #151a26;
    opacity: 0;
    position: absolute;
    bottom: 14px;

    & > p {
      color: #151a26;
    }
  }
`
