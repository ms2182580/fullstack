import { ui_header_card } from "@/components/ui/org/third-page/sections/ui_header_card"
import { ui_section_card } from "@/components/ui/org/third-page/sections/ui_section_card"
import styled from "styled-components"

export const ORG_D_Detail_MainCard2Wrapper = styled.div`
  ${ui_section_card()}

  & > :nth-child(1) {
    ${ui_header_card()}
  }
`
