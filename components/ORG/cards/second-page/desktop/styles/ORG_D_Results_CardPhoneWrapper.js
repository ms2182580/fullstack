import styled from "styled-components"
import { SEMANTICS } from "../../../../../../assets/Colors"

export const ORG_D_Results_CardPhoneWrapper = styled.div`
  & > :nth-child(2){
    color:${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration-line: underline;
    cursor: pointer;
  }
  
`
