import { NEUTRALS, PRIMARY } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { HeaderCSS } from "@/components/ui/heading_body_text/HeaderFonts"
import styled from "styled-components"

export const TellUsAboutYouWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "header header"
    "signin signup";

  row-gap: 8px;
  column-gap: calc(8px * 4);
  margin-block: auto;
  padding-inline: calc(8px * 5);

  height: 100dvh;

  & > * {
    height: fit-content;
  }

  & > :nth-child(1) {
    grid-area: header;
    margin-top: auto;

    & > h1 {
      ${HeaderCSS()};
      text-transform: lowercase;
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }

  & > :nth-child(2) {
    grid-area: signin;
  }
  & > :nth-child(3) {
    grid-area: signup;
  }
  & > article {
    border: 2px solid ${NEUTRALS.BORDER};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    gap: 16px;

    padding-block: 14px;
    padding-inline: 24px;

    height: 270px;

    cursor: pointer;

    :is(:hover, :focus-visible) {
      box-shadow: 0px 0px 1px 1px ${NEUTRALS.BORDER};

      & > p {
        & > span {
          text-decoration: underline;
          color: ${PRIMARY.PRIMARY_CTA};
          text-decoration-thickness: 2px;
        }
      }
    }

    & > img {
      object-fit: contain;
      height: 100%;
    }

    & > p {
      ${Paragraph({ color: "black" })};
      font-size: 21px;
      font-weight: 600;

      text-align: center;
      margin-top: auto;
    }
  }
`
