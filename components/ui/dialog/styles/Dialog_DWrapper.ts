import { NEUTRALS } from "@/assets/Colors"
import { dialogCSS } from "@/components/inFront_D/styles/dialog"
import styled from "styled-components"

export const Dialog_DWrapper = styled.dialog`
  ${dialogCSS()};

  border-radius: 8px;
  border: 2px solid ${NEUTRALS.BORDER};

  & > :nth-child(1) {
    display: grid;
    padding: 24px 32px;

    & > :nth-child(1) {
      margin-left: auto;
    }
  }
`
