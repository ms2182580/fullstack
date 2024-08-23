import { NEUTRALS, PRIMARY, SEMANTICS } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const Layout_Dashboard_CarePlan_AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 16px;

  border-right: 1px solid ${NEUTRALS.BORDER};

  & > :nth-child(1) {
    text-decoration: none;
    padding-inline: 10px;

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      & > * {
        & > * {
          fill: ${PRIMARY.PRIMARY_LOGO};
        }
      }
    }

    & > :nth-child(2) {
      ${Paragraph({ color: "black", fontWeight: "semibold" })};
      text-transform: uppercase;
      text-align: center;
      margin: 4px;
    }
  }

  & > :nth-child(2) {
    margin-top: 54px;
    list-style: none;

    display: grid;

    & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      gap: 4px;
      padding-inline: 8px;
      padding-block: 16px;

      & > svg {
        & > * {
          fill: ${PRIMARY.PRIMARY_CTA};
        }
      }

      & > p {
        text-transform: capitalize;
        color: ${PRIMARY.PRIMARY_CTA};
        font-size: 12px;
      }

      &:hover,
      &:focus-visible {
        background-color: ${SEMANTICS.NAVIGATION_ACTIVE};
      }
    }
  }
`
