import styled from "styled-components"
import { SECONDARY_ORG_PLUS } from "../../../../assets/Colors"

export const VerifiedWrapper = styled.div`
  background-color: ${SECONDARY_ORG_PLUS.YELLOW};
  border-radius: 24px;

  display: flex;
  align-items: center;

  padding: 4px 8px;
  width: 91px;
  height: 32px;

  & > :nth-child(1) {
    margin-right: 8px;
  }
  
  & > :nth-child(2){
    /* border: 2px solid crimson; */
    
    
    font-size:14px;
  }
  
  
`
