import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../assets/Colors"

export const INDEX_M_STSearchWrapper = styled.div`
  background-color: ${NEUTRALS.OFF_WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > :nth-child(1) {
    margin-top: 32px;
    margin-inline: 41px;
    margin-bottom: 16px;
  }

  & > :nth-child(2) {
    text-align: center;
    font-size: clamp(16px, 6.8vw, 99px);
    line-height: 1;
    margin-bottom: 24px;
  }
`
