import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_ContactWrapper = styled.article`
  & > details:not([open]) {
    border-radius: 8px;
    & > summary {
      border-radius: 8px;

      & > h2 {
        border-radius: 8px;
      }
    }
  }

  details {
    ${ui_section_card()}
    background-color: ${NEUTRALS.OFF_WHITE};

    & > summary {
      ::marker {
        content: "";
      }

      & > h2 {
        ${ui_header_card()};

        display: flex;
        align-items: center;

        white-space: nowrap;
      }

      &:hover,
      &:focus-visible {
        & > h2 {
          background-color: hsl(283.3, 38.3%, 86.9%);
        }
      }
    }

    & > :nth-child(2),
    p {
      font-size: 14px;
    }

    & > :nth-child(2) {
      padding-top: 8px;

      ul {
        list-style: none;
        display: grid;

        & > *:not(:last-child) {
          border-bottom: 1px solid ${NEUTRALS.BORDER};
          padding: 12px 0px;
        }

        & > li {
          display: grid;
          grid-template-columns: repeat(2, auto);
          justify-content: space-between;
          align-items: center;
        }

        & > :last-child {
          margin-top: 20px;
          & > p:nth-of-type(1) {
            text-transform: capitalize;
            font-weight: 600;
            color: ${SEMANTICS.HYPERLINK_NORMAL};
          }
        }

        & > li:nth-of-type(1) > span:nth-of-type(1),
        & > li:nth-of-type(2) > span:nth-of-type(1),
        & > li:nth-of-type(3) > span:nth-of-type(1),
        & > li > p:nth-of-type(2) {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      & > :nth-child(2) {
        height: 167px;
      }
    }
  }
`
