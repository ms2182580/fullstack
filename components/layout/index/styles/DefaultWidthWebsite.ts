import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import { css } from "styled-components"

export const defaultWidthWebsite = () => css`
  max-width: ${maxDesktopScreenSize};
  margin-inline: auto;
`
