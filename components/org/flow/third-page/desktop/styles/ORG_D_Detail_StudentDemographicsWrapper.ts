import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_StudentDemographicsWrapper = styled.article`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()};

    h2 {
      font-size: 20px;
      text-transform: capitalize;
    }
  }

  & > section {
    display: flex;
    flex-direction: column;

    gap: 24px;
  }

  .BorderSection {
    border-bottom: 1px solid hsl(0, 0%, 88.6%);
  }

  table {
    font-size: 16px;
    width: 100%;
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

  .ShadowTable {
    box-shadow: 0px 3.6px 3.6px 0px rgba(0, 0, 0, 0.25);
    font-size: 16;
  }

  .ElementsBackground {
    display: flex;
    border-left: 3px solid rgba(217, 217, 217, 0);
    border-radius: 8px;
  }
`
