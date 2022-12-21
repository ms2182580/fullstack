import styled from "styled-components"
import { NEUTRALS } from "../../../../assets/Colors"

export const STDetail_MainWrapper = styled.div`
  & > * {
    padding-inline: 96px;
  }

  & > :not(:first-child) {
    background-color: ${NEUTRALS.OFF_WHITE};
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);
  }

  & > :nth-child(2),
  & > :nth-child(3) {
    padding-bottom: 32px;
  }
`
