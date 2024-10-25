import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import styled from "styled-components"

type Props = {
  shouldShow: boolean
}

export const SBSG_4OptionsDropdownWrapper = styled.div<Props>`
  position: relative;

  & > :nth-child(1) {
    :is(:hover, :focus-visible) {
      opacity: 0.8;
      & > * {
        fill: ${PRIMARY.PRIMARY_CTA};
      }
    }
  }

  & > :nth-child(2) {
    position: absolute;
    z-index: 1;

    display: ${({ shouldShow }) => (shouldShow ? "grid" : "none")};
    gap: 8px;

    background-color: ${NEUTRALS.OFF_WHITE};
    padding: 8px;

    border: 1px solid ${NEUTRALS.BORDER};
    border-radius: 4px;

    & > * {
      width: max-content;

      display: flex;
      gap: 8px;

      cursor: default;

      & > * {
        & > * {
          fill: ${NEUTRALS.DARK_GREY_3};
        }
      }

      :is(:hover, :focus-visible) {
        opacity: 0.8;
      }
    }
  }
`
