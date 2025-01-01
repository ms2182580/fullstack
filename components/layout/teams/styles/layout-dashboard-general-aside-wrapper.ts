import { NEUTRALS, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const LayoutDashboardGeneralAsideWrapper = styled.div`
  padding-inline: 12px;
  padding-top: calc(8px * 4);

  border-right: 1px solid ${NEUTRALS.BORDER};

  display: flex;
  flex-direction: column;

  min-width: 264px;

  & > :nth-child(1) {
    margin-inline: auto;
  }

  & > button {
    ${reusableButton({ secondary: true })};
    margin-top: calc(8px * 6);

    margin-inline: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;

    width: 205px;
    padding-inline: 24px;

    & > svg {
      & > path {
        fill: ${SECONDARY_BG_BIGBLOCKS_TEXT.ASH_BLUE_2};
        transition: all 0.1s ease-in-out;
      }
    }

    & > span {
      font-size: 20px;
      font-weight: 600;
    }

    &:is(:hover, :focus-visible) {
      & > * {
        & > * {
          fill: ${NEUTRALS.OFF_WHITE};
        }
      }
    }
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

        position: relative;

        & > svg {
          & > path {
            fill: currentColor;
          }
        }

        &:is(:hover, :focus-visible) {
          background-color: transparent;

          &::after {
            content: "Route on construction!";
            position: absolute;

            left: 0;
            top: -50%;
            left: 18%;

            width: max-content;
            padding: calc(8px * 1);
            border-radius: 8px 8px 8px 0;

            background-color: ${NEUTRALS.DARK_GREY_3};
            color: white;
          }
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
