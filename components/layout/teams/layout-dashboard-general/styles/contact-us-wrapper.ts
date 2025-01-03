import { NEUTRALS } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const ContactUsWrapper = styled.div`
  & > p {
    border-top: 1px solid ${NEUTRALS.BORDER};

    padding: 20px 24px;

    ${Paragraph({ color: "black" })};

    display: flex;
    align-items: center;
    justify-content: space-between;

    & > :nth-child(1) {
      rotate: 90deg;

      & > * {
        fill: ${NEUTRALS.BLACK};
        stroke: white;
      }
    }
  }
`
