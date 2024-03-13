import { NEUTRALS } from "@/assets/Colors"
import { dialogCSS } from "@/components/inFront_D/styles/dialog"
import styled from "styled-components"

export const Dialog_DWrapper = styled.dialog`
  ${dialogCSS()};

  border-radius: 8px;
  border: 2px solid ${NEUTRALS.BORDER};

  & > :nth-child(1) {
    display: grid;

    position: relative;

    & > :nth-child(1) {
      position: absolute;
      right: 16px;
      top: 16px;

      &:hover {
        filter: drop-shadow(1px 1px 1px hsla(0, 0%, 0%, 0.25));
      }
    }
  }
`
