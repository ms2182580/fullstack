import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled, { css } from "styled-components"

export const defaultWidthWebsite = () => css`
  max-width: ${maxDesktopScreenSize};
  margin-inline: auto;
`

type Props = {
  isMainInHome?: boolean
}

export const MainWrapper = styled.main<Props>`
  ${defaultWidthWebsite()}
`
