import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

type Props = {
  shouldBeDisplayed?: boolean
}

export const ORG_D_Results_CardEmailWrapper = styled.div<Props>`
  position: relative;
  & > p {
    ${Paragraph({
      color: "hyperlink_normal",
      textDecoration: "underline",
    })};

    cursor: default;

    &:hover,
    &:focus-visible {
      opacity: 0.9;
    }
  }
`
