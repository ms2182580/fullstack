import { NEUTRALS } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const LayoutDashboardGeneralAsideWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${NEUTRALS.BORDER};

  & > :nth-child(1) {
    padding: 16px 30px;
  }

  & > :nth-child(2) {
    ${reusableButton()};

    margin-top: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 12px;

    margin-inline: auto;

    & > * {
      & > * {
        fill: ${NEUTRALS.OFF_WHITE};
      }
    }
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
    margin-inline: 12px;

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
