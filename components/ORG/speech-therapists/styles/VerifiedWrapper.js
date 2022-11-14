import styled from "styled-components"
import { SECONDARY_ORG_PLUS } from "../../../../assets/Colors"

export const VerifiedWrapper = styled.div`
 background-color: ${SECONDARY_ORG_PLUS.YELLOW};
 border-radius: 24px;
 
 display: flex;
 align-items: center;
 
 padding: 0.281rem 0.406rem;
 width:5rem;
 height:1.5rem;
 
 & > :nth-child(1){
  margin-right: 8px;
 }
 
`

