import styled from "styled-components"
import { SECONDARY_ORG_PLUS } from "../../../../assets/Colors"

export const VerifiedWrapper = styled.div`
  background-color: ${SECONDARY_ORG_PLUS.YELLOW};
  border-radius: 8px;

  display: flex;
  gap:8px;
  align-items: center;

  padding: 4px 8px;

  & > :nth-child(2){
    font-size:14px;
    font-weight: 500;
  }
  
  
`
