import styled from "styled-components"
import { NEUTRALS } from "../../../../../../assets/Colors"

export const ST_D_Detail_Review_ModalWrapper = styled.div`
  visibility: ${({ showModal }) => (showModal ? `visible` : `hidden`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(932px, 91%, 1310px);
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index:2;
  cursor: default;
  padding-top: 42px;
  padding-inline: 31px;
  border-radius: 8px;

  & > :nth-child(1) {
    position: absolute;
    right: 29px;
    top: 26px;
    cursor: pointer;

    & > :nth-child(1) > path {
      fill: ${NEUTRALS.BLACK};
      border: 2px solid crimson;
    }
  }

  & > :nth-child(2) {
    & > :nth-child(2){
      margin-bottom:36px;
    }
    
    
    & > :nth-child(4){
      & > :nth-child(2) {
        border:none;
        margin-bottom:34px;
      }
    }
  }
  
  & > :nth-child(3){
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    gap:22px;
  }
  
  
  
`
