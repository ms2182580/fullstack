import { PRIMARY } from "@/assets/Colors"
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

export const INDEX_D_SidebarWrapper = styled.div`
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
