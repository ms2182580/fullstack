import styled from 'styled-components'
import { NEUTRALS, PRIMARY } from '../../../../assets/Colors'

export const NavBar_D_InfoDropdownWrapper = styled.div`
  /* border: 2px solid crimson; */
  position: absolute;
  top:100%;
  left:0;
  z-index:3;
  
  padding: 33px;
  display: flex;
  flex-direction: column;
  gap:25px;
  width: max-content;
  
  background-color: ${NEUTRALS.OFF_WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  
  cursor: default;
  
  & > * {
    border: 2px solid transparent;
    cursor: pointer;
    
    &:hover{
      border-bottom: 2px solid ${PRIMARY.PRIMARY_CTA};
    }
    
  }
  
  
  
`