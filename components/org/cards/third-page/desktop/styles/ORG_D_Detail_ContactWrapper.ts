import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_ContactWrapper = styled.article`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()};

    white-space: nowrap;
    height: 56px;
    display: flex;
    align-items: center;
  }

  & > :nth-child(2),
  p {
    font-size: 14px;
  }

  & > :nth-child(2) {
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
    }

    & > :nth-child(2) {
      height: 167px;
    }
  }
`
