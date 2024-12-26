import { PRIMARY, SECONDARY_BG_BIGBLOCKS_TEXT } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import styled, { css } from "styled-components"

type AcceptedRoutes =
  | keyof typeof ALL_ROUTES_INTERNAL.AUTHENTICATION
  | (typeof ALL_ROUTES_INTERNAL.AUTHENTICATION)[keyof typeof ALL_ROUTES_INTERNAL.AUTHENTICATION]

type Props = {
  actualRoute: AcceptedRoutes
}

export const LayoutAuthWrapper = styled.div<Props>`
  display: flex;
  gap: calc(8px * 2);

  & > aside {
    flex: 0 0 564px;
    padding-inline: calc(8px * 8);
    padding-block: 32px 100px;

    background-color: ${SECONDARY_BG_BIGBLOCKS_TEXT.YELLOW_2};

    border-top-right-radius: calc(8px * 3);
    border-bottom-right-radius: calc(8px * 3);

    min-height: 100dvh;

    & > header {
      h1 {
        ${HeaderCSS({ fontWeight: 600, color: "dark_gray2" })}
        font-size: calc(8px * 4);
        line-height: 54px;
      }
    }

    & > :nth-child(2) {
      margin-top: calc(8px * 7);
    }

    & > :nth-child(3) {
      margin-top: calc(8px * 2);

      display: grid;
      gap: calc(8px * 3);

      p {
        ${Paragraph({ color: "dark_gray_2", fontWeight: 400 })}
        line-height: 27px;
        letter-spacing: 0.3px;
      }
    }

    & > :nth-child(4) {
      margin-top: calc(8px * 7);
      display: flex;
      align-items: flex-start;

      column-gap: 8px;

      accent-color: ${PRIMARY.PRIMARY_CTA};

      & > input[type="checkbox"] {
        margin-top: 5px;
      }

      & > p {
        ${Paragraph({ color: "dark_gray_2", fontWeight: 400 })};
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.3px;
        font-style: italic;

        & > span {
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.3px;

          color: crimson;
        }
      }
    }
  }

  & > main {
    flex-grow: 1;
  }

  ${({ actualRoute }) =>
    (actualRoute === "SIGNIN" || actualRoute === "SIGNUP") &&
    css`
      & > * {
        border: 20px solid lightseagreen !important;
      }
    `}
`
