import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const SBSG_2Wrapper = styled.article`
  & > header {
    h5 {
      ${HeaderCSS({ fontSize: "16px", fontWeight: "600" })}
    }
  }

  & > p {
    margin-top: 16px;
    ${Paragraph({ color: "dark_gray_2" })};

    span {
      font-weight: 600;
      font-style: italic;
    }
  }

  & > :nth-child(3) {
    margin-top: 8px;
  }
`
