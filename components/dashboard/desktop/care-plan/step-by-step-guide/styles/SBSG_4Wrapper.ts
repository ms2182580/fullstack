import { PRIMARY } from "@/assets/Colors"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const SBSG_4Wrapper = styled.section`
  display: grid;
  gap: 16px;

  & > header {
    h5 {
      ${HeaderCSS({ fontSize: "16px", fontWeight: "600" })}
    }
  }

  & > :last-child {
    color: ${PRIMARY.PRIMARY_CTA};

    display: flex;
    gap: 8px;

    cursor: default;

    & > :nth-child(1) {
      & > :nth-child(1) {
        fill: currentColor;
      }
    }

    :is(:hover, :focus-visible) {
      opacity: 0.8;
    }
  }
`
