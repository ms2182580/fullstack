import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const ORG_D_Results_CardPhoneWrapper = styled.div`
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
