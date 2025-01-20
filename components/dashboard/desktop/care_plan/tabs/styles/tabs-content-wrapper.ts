import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const TabsContentWrapper = styled.div`
  min-height: 100dvh;

  background-color: ${NEUTRALS.OFF_WHITE};
`

type DataContentComponentWrapperProps = {
  isVisible: boolean
}

export const DataContentComponentWrapper = styled.div<DataContentComponentWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  min-width: 656px;
  max-width: 940px;
`
