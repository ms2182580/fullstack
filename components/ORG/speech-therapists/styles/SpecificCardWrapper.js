import styled from "styled-components"
import { SECONDARY_ORG_PLUS, SECONDARY_SNT } from "../../../../assets/Colors"

export const SpecificCardWrapper = styled.div`
  background-color: ${SECONDARY_ORG_PLUS.PINK};
  border-radius: 6px;
  border: 2px solid ${SECONDARY_SNT.PINK};
  
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  padding-top: 24px;
  padding-inline: 75px;
  padding-bottom: 57px;
  
  & > :nth-child(1){
    margin-bottom: 33px;
  }
  
  & > :nth-child(2){
    white-space: nowrap;
  }
  
  &:hover{
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.75);
  }
  
  
  
  
`
