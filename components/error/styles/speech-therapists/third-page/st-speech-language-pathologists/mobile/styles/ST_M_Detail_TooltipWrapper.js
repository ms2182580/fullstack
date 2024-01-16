import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../../assets/Colors"

export const ST_M_Detail_TooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > :nth-child(2) {
    & > :nth-child(1) {
      position: absolute;
      top: 25px;
      left: -7px;
      border-style: solid;
      border-width: 0 16.5px 28px 16.5px;
      border-color: transparent transparent ${NEUTRALS.OFF_WHITE} transparent;
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
    }

    & > :nth-child(2) {
      width: 256px;
      position: absolute;
      background-color: ${NEUTRALS.OFF_WHITE};
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      z-index: 2;
      top: 50px;
      left:${({ isThirdPage }) => isThirdPage ? `-210px` : `-99px`};
      
      border-radius: 8px;
      padding: 16px 32px;
    }
  }
`
