import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

export const INDEX_D_AIChatWrapper = styled.div`
  & > :nth-child(1) {
    & > :nth-child(1) {
      & > * {
        fill: ${PRIMARY.PRIMARY_CTA};
      }
    }
  }
`
