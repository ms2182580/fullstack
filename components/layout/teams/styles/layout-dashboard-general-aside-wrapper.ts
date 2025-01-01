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
      border-radius: 6px;

      & > a {
        display: flex;
        gap: 12px;

        padding: 16px 24px;
        border-radius: inherit;

        font-weight: 500;
      }
    }

    & > :nth-child(4) {
      & > a {
        cursor: not-allowed;

        color: ${NEUTRALS.DARK_GREY_3};
        font-weight: 400;

        & > svg {
          & > path {
            fill: currentColor;
          }
        }

        &:is(:hover, :focus-visible) {
          background-color: transparent;
        }
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
