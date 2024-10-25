import { NEUTRALS } from "@/assets/Colors"
import { Paragraph } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import styled from "styled-components"

export const SBSG_4OptionsWrapper = styled.ul`
  list-style: none;
  display: grid;
  gap: calc(8px * 3);

  & > li {
    border: 1px solid ${NEUTRALS.DARK_GREY_3_05};
    border-radius: 8px;

    padding: 16px;

    display: grid;
    grid-template-columns: auto 1fr auto;

    grid-template-areas:
      "image title ."
      "image subTitle options"
      "image location .";

    column-gap: 16px;

    & > :nth-child(1) {
      grid-area: image;
      object-fit: cover;
      height: 100%;

      border-radius: 4px;
    }

    & > :nth-child(2),
    & > :nth-child(3),
    & > :nth-child(4) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    & > :nth-child(2) {
      grid-area: title;

      ${Paragraph({ fontWeight: "600", color: "black_2" })};
      line-height: 27px;
    }

    & > :nth-child(3) {
      grid-area: subTitle;

      ${Paragraph({ color: "dark_gray_2" })};
      line-height: 20px;
    }

    & > :nth-child(4) {
      grid-area: location;

      ${Paragraph({ color: "light_maroon" })};
      line-height: 20px;
    }

    & > :nth-child(5) {
      grid-area: options;
    }
  }
`
