import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled, { css } from "styled-components"

export const defaultWidthWebsite = () => css`
  max-width: ${maxDesktopScreenSize};
  margin-inline: auto;
  display: flex;
  & > :nth-child(1) {
    display: flex;
    width: 240px;
    height: 100vh;
    padding: 16px 0px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
  }
`

export const INDEX_D_Dashboard_LayoutWrapper = styled.div`
  ${defaultWidthWebsite()}
`
