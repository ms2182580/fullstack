import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_SchoolAcademicsWrapper = styled.article`
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
    gap: 24px;

    & > * {
      display: grid;
      gap: 8px;
    }

    & > section:nth-of-type(1) {
      h3 {
        display: flex;
      }
    }
  }
`
