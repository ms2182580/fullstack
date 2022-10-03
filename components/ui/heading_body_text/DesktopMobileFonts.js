import styled from "styled-components"
import { FontsDesktopAndMobile } from "../../../assets/Fonts/HeadingValues"
import { FontsWeights } from "../../../assets/Fonts/Weights"

const SharedVariables = {
  FontWeight_400: `${FontsWeights.REGULAR_400}`,
  FontWeight_600: `${FontsWeights.SEMIBOLD_600}`,
  FontWeight_700: `${FontsWeights.BOLD_700}`,
  FontSizeBody: `${FontsDesktopAndMobile.BODY_16}`,
  FontSizeCaption: `${FontsDesktopAndMobile.CAPTION_12}`,
  Underline: "underline",
  LineThrough: "line-through"
}

export const P = styled.p`
  font-size: ${SharedVariables.FontSizeBody};
  font-weight: ${(x) =>
    x.bold
      ? SharedVariables.FontWeight_700
      : x.semibold
      ? SharedVariables.FontWeight_600
      : SharedVariables.FontWeight_400};
  text-decoration: ${(x) =>
    x.underline
      ? SharedVariables.Underline
      : x.linethrough
      ? SharedVariables.LineThrough
      : x.linethrough && x.underline
      ? SharedVariables.Underline && SharedVariables.LineThrough
      : null};
`
export const Caption = styled.span`
  font-size: ${SharedVariables.FontSizeCaption};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_700
      : x.bold
      ? SharedVariables.FontWeight_600
      : SharedVariables.FontWeight_400};
  text-decoration: ${(x) =>
    x.underline
      ? SharedVariables.Underline
      : x.linethrough
      ? SharedVariables.LineThrough
      : x.linethrough && x.underline
      ? SharedVariables.Underline && SharedVariables.LineThrough
      : null};
`
