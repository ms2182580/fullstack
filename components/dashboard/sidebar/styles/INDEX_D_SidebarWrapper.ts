import { PRIMARY } from "@/assets/Colors"
import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled, { css } from "styled-components"

const logo = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  & > :nth-child(1) {
    color: ${PRIMARY.PRIMARY_LOGO};
    font-size: 33px;
    font-style: normal;
    font-weight: 800;
    line-height: 51px; /* 154.545% */
    letter-spacing: 1.32px;
    margin-bottom: 24px;
  }
  & > :nth-child(2) {
    width: 33.11px;
    height: 33.11px;
    margin-bottom: 50px;
  }
`

const button = () => css`
  margin-inline: auto;
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`

type Props = {
  currentDashboardPath: number
}
export const INDEX_D_SidebarWrapper = styled.div<Props>`
  & > :nth-child(1) {
    width: 100%;
    border-right: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 20px;
    height: 100%;
    & > :nth-child(1) {
      ${logo()}
    }
    & > :nth-child(2) {
      ${button()}
    }
    & > :nth-child(3) {
      list-style: none;
      padding-top: 40px;
      & > :nth-child(${(props) => props.currentDashboardPath}) {
        background-color: ${PRIMARY.PRIMARY_BACKGROUND};
      }
      & > li > * {
        display: flex;
        padding-top: 16px;
        padding-bottom: 16px;
        text-decoration: none;
        color: black;
        & > :nth-child(1) {
          margin-left: 24px;
          margin-right: 10px;
        }
        & > :nth-child(2) {
          border: none;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 27px; /* 168.75% */
        }
      }
    }
  }

  & > :nth-child(2) {
    margin-inline: auto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
