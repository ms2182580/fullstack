import styled from 'styled-components'
import { NEUTRALS } from '../../../../../../assets/Colors'

export const ORG_D_Detail_About_ModalWrapper = styled.div`
  visibility: ${({ showModal }) => (showModal ? `visible` : `hidden`)};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(932px, 91%, 1200px);
  background-color: ${NEUTRALS.OFF_WHITE};
  z-index: 5;
  cursor: default;
  padding:73px;
  border-radius: 8px;
  
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  justify-content:center;
  gap:112px;
  
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
  
  & > *:not(:first-child){
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction:column;
    gap:30px;
  }
  
`