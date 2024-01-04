import styled from "styled-components"
import { SEMANTICS } from "../../../../../../assets/Colors"

export const ORG_D_Results_CardWebsiteWrapper = styled.div`
  display: flex;
  align-items: center;

  & > :nth-child(2) {
    color: ${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration-line: underline;
    cursor: pointer;
  }
`
