import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const NavBar_D_SignComponentDropdownWrapper = styled.div`
  position: absolute;
  z-index: 4;
  right:0;
  top:100%;

  background-color: ${NEUTRALS.OFF_WHITE};
  padding: 24px;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  display: flex;
  flex-direction: column;
  gap:30px;

  & > * {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    cursor: pointer;
  }
  
  
  & > :nth-child(1){
    gap:24px;
  }
  
  & > *:not(:first-child){
    gap:8px;
    
  }
  

  .separator {
    border: 1px solid ${NEUTRALS.DARK_GREY};
    width:100%;
    
    /* width: calc(100% + 24px * 2); */
    /* margin-left: -24px; */
  }
`
