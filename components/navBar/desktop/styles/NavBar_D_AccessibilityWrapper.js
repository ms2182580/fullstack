import { NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const NavBar_D_AccessibilityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  cursor: pointer;

  & > :nth-child(2) {
    & > :nth-child(1) {
      & > :nth-child(1) {
        & > * {
          fill: ${NEUTRALS.DARK_GREY};
        }
      }
    }

    & > *:not(:first-child) {
      & > :nth-child(1) {
        & > * {
          stroke: ${NEUTRALS.DARK_GREY};
        }
      }
    }
  }
`
