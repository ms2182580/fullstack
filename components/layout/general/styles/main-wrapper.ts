import styled from "styled-components"
import { defaultWidthWebsite } from "../../index/styles/DefaultWidthWebsite"

type Props = {
  isMainInHome?: boolean
}

export const MainWrapper = styled.main<Props>`
  ${defaultWidthWebsite()};

  position: relative;

  min-height: 100dvh;
`
