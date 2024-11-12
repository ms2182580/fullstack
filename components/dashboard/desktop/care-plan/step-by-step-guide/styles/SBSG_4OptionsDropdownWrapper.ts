import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { RGBAfn } from "@/utils/colors"
import styled from "styled-components"

type Props = {
  shouldShow: boolean
}

export const SBSG_4OptionsDropdownWrapper = styled.div<Props>`
  position: relative;
  border-radius: 50%;

  & > :nth-child(2) {
    position: absolute;
    z-index: 1;

    display: ${({ shouldShow }) => (shouldShow ? "grid" : "none")};

    background-color: ${NEUTRALS.OFF_WHITE};

    border: 1px solid ${NEUTRALS.BORDER};
    border-radius: 4px;

    width: max-content;

    & > * {
      padding: 8px;
      display: flex;
      gap: 8px;

      cursor: default;

      & > :nth-child(1) {
        flex-shrink: 0;
      }

      & > :nth-child(2) {
        flex-grow: 1;
      }

      & > * {
        & > * {
          fill: ${NEUTRALS.DARK_GREY_3};
        }
      }

      :is(:hover, :focus-visible) {
        background-color: ${() => RGBAfn(PRIMARY.PRIMARY_CTA, 0.1)};
      }
    }
  }

  :is(:hover, :focus-visible) {
    & > :nth-child(1) {
      & > * {
        fill: ${PRIMARY.PRIMARY_CTA};
      }
    }

    &:before {
      content: "";
      position: absolute;
      z-index: 2;
      inset: 0;
      width: 100%;
      height: 100%;
      background: ${PRIMARY.PRIMARY_CTA};
      border-radius: inherit;
      opacity: 0.1;
    }
  }
`
