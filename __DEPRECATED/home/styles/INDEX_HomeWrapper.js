import { maxDesktopScreenSize } from "@/assets/screen-sizes/ScreenSizes"
import styled from "styled-components"

export const INDEX_HomeWrapper = styled.div`
  & > *:not(:first-child) {
    margin-inline: auto;
    max-width: ${maxDesktopScreenSize};
  }
`
