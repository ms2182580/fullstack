import styled from "styled-components"
import { NEUTRALS } from "../../../../../../../assets/Colors"

export const ST_D_Detail_TooltipWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  & > :nth-child(1) {
    cursor: pointer;
  }

  & > :nth-child(2) {
    & > :nth-child(1) {
      position: absolute;
      top: 29px;

      left: -7px;
      border-style: solid;
      border-width: 0 16.5px 28px 16.5px;
      border-color: transparent transparent ${NEUTRALS.OFF_WHITE} transparent;
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      
    }

    & > :nth-child(2) {
      width: 600px;
      position: absolute;
      background-color: ${NEUTRALS.OFF_WHITE};
      filter: drop-shadow(0px 0px 14px rgba(0, 0, 0, 0.3));
      z-index: 3;
      top: 56px;
      right: -72px;
      border-radius: 8px;
      padding: 16px 32px;
      
    }
  }

`
