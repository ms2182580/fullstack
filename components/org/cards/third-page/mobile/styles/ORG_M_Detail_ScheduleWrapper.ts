import styled, { css } from "styled-components"
import {
  NEUTRALS,
  PRIMARY,
  SECONDARY_ORG_PLUS,
} from "../../../../../../assets/Colors"
import { IS_USABLE_SECTION } from "../ORG_M_Detail_Schedule"

type Props = {
  [IS_USABLE_SECTION.KEY]: boolean
}

const commonButtonStyle = `
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  & > button {
    background-color: ${PRIMARY.PRIMARY_BACKGROUND};
    color: black;
    font-weight: 400px;
    font-size: 14px;
  }
`

export const ORG_M_Detail_ScheduleWrapper = styled.section<Props>`
  position: relative;
  & > :nth-child(1) {
    color: ${PRIMARY.PRIMARY_CTA};
    font-weight: 600;
    font-size: 17px;
  }
  & > :nth-child(2) {
    & > :nth-child(1) {
      & > :nth-child(1) {
        margin-top: 10px;
      }
      & > :nth-child(2) {
        ${commonButtonStyle}
      }
    }
    & > :nth-child(2) {
      & > :nth-child(1) {
        margin-top: 10px;
      }
      & > :nth-child(2) {
        ${commonButtonStyle}
      }
    }
    & > :nth-child(3) {
      & > :nth-child(1) {
        margin-top: 10px;
      }
      & > :nth-child(2) {
        ${commonButtonStyle}
      }
    }
    & > :nth-child(4) {
      & > :nth-child(1) {
        margin-top: 10px;
      }
      & > :nth-child(2) {
        ${commonButtonStyle}
      }
    }
    & > :nth-child(5) {
      & > :nth-child(1) {
        margin-top: 10px;
      }
      & > :nth-child(2) {
        ${commonButtonStyle}
      }
    }
  }
  & > :nth-child(3) {
    border-radius: 10px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};
    background-color: white;
    color: ${PRIMARY.PRIMARY_CTA};
    width: 100%;
    margin-bottom: 20px;
  }
  & > :nth-child(4) {
    border-radius: 10px;
    border: 2px solid ${PRIMARY.PRIMARY_CTA};
    color: white;
    background-color: ${PRIMARY.PRIMARY_CTA};
    width: 100%;
    margin-bottom: 20px;
  }
`
