import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled, { css } from "styled-components"

export const ORG_M_Results_Pagination = styled.footer<{ activeIndex: number }>`
  position: fixed;
  bottom: 0%;
  left: 0px;
  height: 88px;
  width: 100%;
  border-top: 1px solid ${NEUTRALS.LIGHT_GREY};
  background: #fff;
  box-shadow: 0px -2px 9px 0px rgba(0, 0, 0, 0.2),
    0px -4px 6px 0px rgba(0, 0, 0, 0.15) inset;

  & > :nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    & > button {
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      width: 48px;
      height: 48px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid ${NEUTRALS.BLACK};
    }
    & > :nth-child(${(props) => props.activeIndex}) {
      background-color: ${PRIMARY.PRIMARY_LOGO};
      color: white;
    }
  }
`
