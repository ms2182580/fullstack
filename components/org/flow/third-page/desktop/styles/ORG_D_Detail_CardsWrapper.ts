import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"
import {
  IconToToggleShouldRotate,
  ToggleCustomStyles,
} from "../ORG_D_Detail_Cards"

type Props = {
  iconToToggleShouldRotate?: IconToToggleShouldRotate
  toggleCustomStyles?: ToggleCustomStyles
}

export const ORG_D_Detail_CardsWrapper = styled.section<Props>`
  border-radius: 8px;

  & > details,
  & > div:nth-of-type(1) {
    ${ui_section_card()};
  }

  & > details > summary > :nth-child(1),
  & > div:nth-of-type(1) > :nth-child(1) {
    ${ui_header_card()};
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    white-space: nowrap;
  }

  /* Only toggable from here, wit "details" tag as the first child */
  & > details {
    &:not([open]) {
      summary {
        & > :nth-child(1) {
          border-radius: 8px;
        }
      }
    }

    &[open] {
      summary {
        & > :nth-child(1) {
          & > :nth-child(1) {
            transform: ${({ iconToToggleShouldRotate }) =>
              iconToToggleShouldRotate && `rotate(180deg)`};
          }
        }
      }
    }

    & > summary {
      & > :nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > span {
          width: 48px;
          height: 48px;

          display: flex;
          align-items: center;
          justify-content: center;

          background-color: ${NEUTRALS.OFF_WHITE};

          outline: 2px solid ${PRIMARY.PRIMARY_CTA};
          border-radius: 8px;

          ${({ toggleCustomStyles }) =>
            toggleCustomStyles && toggleCustomStyles()};
        }
      }

      ::marker {
        content: "";
      }

      &:hover,
      &:focus-visible {
        & > :nth-child(1) {
          background-color: hsl(283.3, 38.3%, 86.9%);
        }
      }
    }
  }

  /* Only not toggable from here, wit "div" tag as the first child */
  & > div:nth-of-type(1) {
  }
`
