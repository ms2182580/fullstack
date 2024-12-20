import { NEUTRALS, SEMANTICS } from "@/assets/Colors"
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

  & > :nth-child(1) {
    flex: 0 0 564px;
    padding-inline: calc(8px * 8);
    padding-block: 32px 100px;

    background-color: #e6e780;

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

      input[type="checkbox"] {
        margin-top: 6px;

        border: 2px solid crimson;

        -webkit-appearance: none;
        appearance: none;

        border: 2px solid ${NEUTRALS.BLACK};
        padding: 6px;

        background-color: ${NEUTRALS.OFF_WHITE};

        border-radius: 4px;

        &:checked {
          position: relative;

          &::before {
            content: "L";
            font-family: arial;
            font-weight: 600;
            transform: scaleX(-1) rotate(-37deg);
            scale: 1;

            position: absolute;
            left: 3px;
            top: -2px;

            /* top: 0px; */

            /* left: 8px; */
          }
        }

        :is(:hover, :focus-visible) {
          box-shadow: 0px 0px 1px 1px ${SEMANTICS.HYPERLINK_NORMAL};
        }
      }

      & > span {
        ${Paragraph({ color: "dark_gray_2", fontWeight: 400 })}
        font-size:12px;
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

  & > :nth-child(2) {
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
