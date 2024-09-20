import { NEUTRALS } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const SBSG_1Wrapper = styled.article`
  padding-bottom: calc(8px * 4);

  & > header {
    h5 {
      ${HeaderCSS({ fontSize: "16px" })}
    }
  }

  & > :nth-child(2) {
    padding-top: calc(8px * 4);

    ul {
      padding-top: 8px;

      list-style: none;
      display: flex;
      align-items: center;

      gap: 24px;

      li {
        border: 1px solid ${NEUTRALS.BORDER};
        border-radius: 4px;

        display: grid;
        justify-items: center;

        cursor: pointer;

        p {
          ${Paragraph({ color: "black" })};

          font-size: 12px;
        }

        :is(:hover, :focus-visible) {
          filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
        }
      }
    }
  }
`
