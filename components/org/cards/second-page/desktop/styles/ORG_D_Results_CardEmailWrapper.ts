import styled from "styled-components"
import { SEMANTICS } from "../../../../../../assets/Colors"

type Props = {
  shouldBeDisplayed?: boolean
}

export const ORG_D_Results_CardEmailWrapper = styled.div<Props>`
  & > :nth-child(2) {
    color: ${SEMANTICS.HYPERLINK_NORMAL};
    text-decoration-line: underline;
  }
`
