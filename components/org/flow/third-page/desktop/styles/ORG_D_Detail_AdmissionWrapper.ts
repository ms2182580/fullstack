import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../../../../assets/Colors"

export const ORG_D_Detail_AdmissionWrapper = styled.article`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()};

    h2 {
      font-size: 20px;
      text-transform: capitalize;
    }
  }

  & > :nth-child(2) {
    display: grid;
    row-gap: 24px;

    & > section:nth-of-type(1),
    & > section:nth-of-type(2) {
      border-bottom: 1px solid hsl(0, 0%, 88.6%);
      padding-bottom: 16px;
    }

    section {
      display: flex;
      flex-direction: column;

      ul {
        list-style: none;

        display: grid;
        gap: 4px;
      }

      & > :nth-child(1) {
        margin-bottom: 4px;
        color: ${PRIMARY.PRIMARY_HOVER};
        font-weight: 700;
      }

      & > :nth-child(2) {
        padding-left: 16px;
      }
    }

    Table {
      font-size: 16px;
      border-spacing: 0px;
      width: 50%;
      padding-top: 19px;
      padding-left: 16px;

      & > :last-child {
        text-align: right;
        padding: 13px;
      }
    }

    tr {
      height: 36px;
    }

    tr:nth-child(even) {
      background-color: rgba(211, 214, 215, 0.2);
    }

    th {
      font-size: 18px;
      background-color: rgba(211, 214, 215, 0.2);
      text-align: left;
      padding-left: 26px;
    }

    td {
      width: 100%;
      padding-left: 26px;
      padding-right: 13px;
    }

    & > :last-child {
      border-radius: 8px;
      border: 2px solid ${PRIMARY.PRIMARY_CTA};

      background-color: ${NEUTRALS.OFF_WHITE};

      width: 344px;
      padding: 8px 116px;

      font-weight: 600;
      font-size: 16px;
      color: ${PRIMARY.PRIMARY_CTA};

      display: grid;
      grid-auto-flow: column;
      white-space: nowrap;

      gap: 8px;

      &:hover,
      &:focus-visible {
        color: ${NEUTRALS.OFF_WHITE};
        background-color: ${PRIMARY.PRIMARY_CTA};
      }
    }
  }
`
