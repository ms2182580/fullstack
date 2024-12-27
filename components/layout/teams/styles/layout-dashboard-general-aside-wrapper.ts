import { NEUTRALS } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const LayoutDashboardGeneralAsideWrapper = styled.div`
  padding-inline: 12px;
  padding-top: calc(8px * 4);

  border-right: 1px solid ${NEUTRALS.BORDER};

  display: flex;
  flex-direction: column;

  & > button {
    margin-top: calc(8px * 6);
  }

  & > ul {
    margin-top: calc(8px * 3);

    & > li {
      & > a {
        display: flex;
        gap: 12px;

        padding: 16px 24px;
      }
    }
  }
  & > :last-child {
    margin-top: auto;

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
