import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const SBSG_3Wrapper = styled.section`
  & > header {
    h5 {
      ${HeaderCSS({ fontSize: "16px", fontWeight: "600" })}
    }
  }

  p:nth-of-type(1) {
    margin-top: 16px;
    ${Paragraph({ color: "black_2" })};
  }
  p:nth-of-type(2) {
    ${Paragraph({ color: "light_maroon" })};
    font-size: 12px;
  }

  & > :nth-child(4) {
    margin-top: 8px;
  }

  & > :nth-child(5) {
    margin-top: 24px;

    display: grid;
    gap: 24px;
  }
`
