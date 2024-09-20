import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const INDEX_D_CarePlan_StepByStepGuideWrapper = styled.div`
  margin-inline: 24px;

  height: fit-content;

  padding-block: 24px;

  border: 1px solid ${NEUTRALS.BORDER};
  border-radius: 8px;

  background-color: ${NEUTRALS.OFF_WHITE};

  & > header {
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: calc(8px * 3);
      width: fit-content;
    }

    & > progress {
      width: 100%;
      height: 10px;
      border-radius: 0px;
      border: none;

      background: linear-gradient(
        90deg,
        hsl(280, 40%, 84.1%) 90%,
        transparent 98%
      );

      &::-moz-progress-bar {
        background-color: ${PRIMARY.PRIMARY_CTA};
      }

      &::-webkit-progress-value {
        background-color: ${PRIMARY.PRIMARY_CTA};
      }
      &::-webkit-progress-bar {
        background-color: hsl(280, 40%, 84.1%);
      }
    }

    & > p {
      ${Paragraph({ color: "light_maroon" })};
      font-size: 12px;
    }

    & > div {
      padding-inline: 16px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      h5 {
        ${HeaderCSS({ fontSize: "20px" })}
      }

      button {
        ${reusableButton({ secondary: true })};
        height: 34px;
        padding-inline: calc(8px * 3);
      }
    }
  }

  & > :nth-child(2) {
    padding-inline: 16px;
    padding-top: 8px;
  }
`
