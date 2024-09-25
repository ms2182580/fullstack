import styled, { css } from "styled-components"
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

type PType = {
  bolder?: boolean
  bold?: boolean
  semibold?: boolean
  medium?: boolean
  underline?: boolean
  linethrough?: boolean
  dark_gray?: boolean
  light_gray?: boolean
  success?: boolean
  error?: boolean
  primary_cta?: boolean
  primary_hover?: boolean
  hyperlink_normal?: boolean
  white?: boolean
}

export const P = styled.p<PType>`
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
export const Caption = styled.span<PType>`
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

type Paragraph_Props = {
  fontWeight?:
    | ("bolder" | 800 | "800")
    | ("bold" | 700 | "700")
    | ("semibold" | 600 | "600")
    | ("medium" | 500 | "500")
    | ("normal" | 400 | "400")
  textDecoration?: "underline" | "linethrough" | "underline linethrough" | ""
  color?:
    | "dark_gray"
    | "dark_gray_2"
    | "dark_gray_3"
    | "light_gray"
    | "light_gray_2"
    | "success"
    | "error"
    | "primary_cta"
    | "primary_hover"
    | "hyperlink_normal"
    | "off_white"
    | "black"
    | "dark_maroon"
    | "light_maroon"
}

export const Paragraph = ({
  fontWeight = "normal",
  textDecoration = "",
  color = "hyperlink_normal",
}: Paragraph_Props = {}) => css`
  line-height: 32px;
  font-size: ${SharedVariables.FontSizeBody};

  font-weight: ${() =>
    fontWeight === "bolder" || fontWeight === "800" || fontWeight === 800
      ? SharedVariables.FontWeight_800
      : fontWeight === "bold" || fontWeight === "700" || fontWeight === 700
      ? SharedVariables.FontWeight_700
      : fontWeight === "semibold" || fontWeight === "600" || fontWeight === 600
      ? SharedVariables.FontWeight_600
      : fontWeight === "medium" || fontWeight === "500" || fontWeight === 500
      ? SharedVariables.FontWeight_500
      : (fontWeight === "normal" ||
          fontWeight === "400" ||
          fontWeight === 400) &&
        SharedVariables.FontWeight_400};

  text-decoration: ${() =>
    textDecoration === "underline"
      ? "underline"
      : textDecoration === "linethrough"
      ? "line-through"
      : textDecoration === "underline linethrough"
      ? "underline line-through"
      : ""};

  color: ${() =>
    color === "dark_gray"
      ? NEUTRALS.DARK_GREY
      : color === "dark_gray_2"
      ? NEUTRALS.DARK_GREY_2
      : color === "dark_gray_3"
      ? NEUTRALS.DARK_GREY_3
      : color === "light_gray"
      ? NEUTRALS.LIGHT_GREY
      : color === "light_gray_2"
      ? NEUTRALS.LIGHT_GREY2
      : color === "success"
      ? SEMANTICS.SUCCESS_STATE
      : color === "error"
      ? SEMANTICS.ERROR_STATE
      : color === "primary_cta"
      ? PRIMARY.PRIMARY_CTA
      : color === "primary_hover"
      ? PRIMARY.PRIMARY_HOVER
      : color === "hyperlink_normal"
      ? SEMANTICS.HYPERLINK_NORMAL
      : color === "off_white"
      ? NEUTRALS.OFF_WHITE
      : color === "dark_maroon"
      ? PRIMARY.DARK_MAROON
      : color === "light_maroon"
      ? PRIMARY.LIGHT_MAROON
      : NEUTRALS.BLACK};
`
