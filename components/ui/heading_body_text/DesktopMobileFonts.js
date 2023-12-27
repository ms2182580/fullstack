import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../assets/Colors"
import { FontsDesktopAndMobile } from "../../../assets/fonts/HeadingValues"
import { FontsWeights } from "../../../assets/fonts/Weights"

const SharedVariables = {
  FontWeight_400: `${FontsWeights.REGULAR_400}`,
  FontWeight_500: `${FontsWeights.MEDIUM_500}`,
  FontWeight_600: `${FontsWeights.SEMIBOLD_600}`,
  FontWeight_700: `${FontsWeights.BOLD_700}`,
  FontWeight_800: `${FontsWeights.BOLDER_800}`,
  FontSizeBody: `${FontsDesktopAndMobile.BODY_16}`,
  FontSizeCaption: `${FontsDesktopAndMobile.CAPTION_12}`,
  Underline: "underline",
  LineThrough: "line-through",
}

export const P = styled.p`
  line-height: 32px;
  font-size: ${SharedVariables.FontSizeBody};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.semibold
      ? SharedVariables.FontWeight_600
      : x.medium
      ? SharedVariables.FontWeight_500
      : SharedVariables.FontWeight_400};

  text-decoration: ${(x) =>
    x.underline
      ? SharedVariables.Underline
      : x.linethrough
      ? SharedVariables.LineThrough
      : x.linethrough && x.underline
      ? SharedVariables.Underline && SharedVariables.LineThrough
      : null};

  color: ${(x) =>
    x.dark_gray
      ? NEUTRALS.DARK_GREY
      : x.light_gray
      ? NEUTRALS.LIGHT_GREY
      : x.success
      ? SEMANTICS.SUCCESS_STATE
      : x.error
      ? SEMANTICS.ERROR_STATE
      : x.primary_cta
      ? PRIMARY.PRIMARY_CTA
      : x.primary_hover
      ? PRIMARY.PRIMARY_HOVER
      : x.hyperlink_normal
      ? SEMANTICS.HYPERLINK_NORMAL
      : x.white
      ? NEUTRALS.OFF_WHITE
      : NEUTRALS.BLACK};
`
export const Caption = styled.span`
  line-height: 24px;
  font-size: ${SharedVariables.FontSizeCaption};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.semibold
      ? SharedVariables.FontWeight_600
      : x.medium
      ? SharedVariables.FontWeight_500
      : SharedVariables.FontWeight_400};

  text-decoration: ${(x) =>
    x.underline
      ? SharedVariables.Underline
      : x.linethrough
      ? SharedVariables.LineThrough
      : x.linethrough && x.underline
      ? SharedVariables.Underline && SharedVariables.LineThrough
      : null};
  color: ${(x) =>
    x.dark_gray
      ? NEUTRALS.DARK_GREY
      : x.light_gray
      ? NEUTRALS.LIGHT_GREY
      : x.success
      ? SEMANTICS.SUCCESS_STATE
      : x.error
      ? SEMANTICS.ERROR_STATE
      : x.primary_cta
      ? PRIMARY.PRIMARY_CTA
      : x.primary_hover
      ? PRIMARY.PRIMARY_HOVER
      : x.hyperlink_normal
      ? SEMANTICS.HYPERLINK_NORMAL
      : NEUTRALS.BLACK};
`
