import styled from "styled-components"
import { NEUTRALS, PRIMARY, SEMANTICS } from "../../../assets/Colors"
import {
  FontsDesktopAndMobile,
  FontsHeadDesktop,
  FontsHeadMobile,
  LetterSpacingHeadDesktop,
  LetterSpacingHeadMobile,
  LineHeightHeadDesktop,
  LineHeightHeadMobile,
} from "../../../assets/fonts/HeadingValues"
import { FontsWeights } from "../../../assets/fonts/Weights"
import { device } from "../../../assets/screen-sizes/ScreenSizes.js"

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
type Type = {
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
  normal?: boolean
  dark_maroon?: boolean
  lineHeight?: string
}
export const D1 = styled.p<Type>`
  font-size: ${FontsHeadDesktop.DISPLAY_1};
  line-height: ${LineHeightHeadDesktop.DISPLAY_1};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.medium
      ? SharedVariables.FontWeight_500
      : x.normal
      ? SharedVariables.FontWeight_400
      : SharedVariables.FontWeight_600};

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
  letter-spacing: ${LetterSpacingHeadDesktop.DISPLAY_1};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.DISPLAY_1};
    line-height: ${LineHeightHeadMobile.DISPLAY_1};
    font-weight: ${(x) =>
      x.bolder
        ? SharedVariables.FontWeight_800
        : x.bold
        ? SharedVariables.FontWeight_700
        : x.medium
        ? SharedVariables.FontWeight_500
        : x.normal
        ? SharedVariables.FontWeight_400
        : SharedVariables.FontWeight_600};
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
    letter-spacing: ${LetterSpacingHeadMobile.DISPLAY_1};
  }
`

export const H1 = styled.h1<Type>`
  font-size: ${FontsHeadDesktop.HEADING_1};
  line-height: ${LineHeightHeadDesktop.HEADING_1};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.medium
      ? SharedVariables.FontWeight_500
      : x.normal
      ? SharedVariables.FontWeight_400
      : SharedVariables.FontWeight_600};

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

  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_1};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_1};
    line-height: ${LineHeightHeadMobile.HEADING_1};
    font-weight: ${(x) =>
      x.bolder
        ? SharedVariables.FontWeight_800
        : x.bold
        ? SharedVariables.FontWeight_700
        : x.medium
        ? SharedVariables.FontWeight_500
        : x.normal
        ? SharedVariables.FontWeight_400
        : SharedVariables.FontWeight_600};

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

    letter-spacing: ${LetterSpacingHeadMobile.HEADING_1};
  }
`

export const H2 = styled.h2<Type>`
  font-size: ${FontsHeadDesktop.HEADING_2};
  line-height: ${LineHeightHeadDesktop.HEADING_2};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.medium
      ? SharedVariables.FontWeight_500
      : x.normal
      ? SharedVariables.FontWeight_400
      : SharedVariables.FontWeight_600};

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

  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_2};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_2};
    line-height: ${LineHeightHeadMobile.HEADING_2};
    font-weight: ${(x) =>
      x.bolder
        ? SharedVariables.FontWeight_800
        : x.bold
        ? SharedVariables.FontWeight_700
        : x.medium
        ? SharedVariables.FontWeight_500
        : x.normal
        ? SharedVariables.FontWeight_400
        : SharedVariables.FontWeight_600};

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

    letter-spacing: ${LetterSpacingHeadMobile.HEADING_2};
  }
`

export const H3 = styled.h3<Type>`
  font-size: ${FontsHeadDesktop.HEADING_3};
  line-height: ${(x) => x.lineHeight || LineHeightHeadDesktop.HEADING_3};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.medium
      ? SharedVariables.FontWeight_500
      : x.normal
      ? SharedVariables.FontWeight_400
      : SharedVariables.FontWeight_600};

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
      : x.dark_maroon
      ? PRIMARY.DARK_MAROON
      : NEUTRALS.BLACK};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_3};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_3};
    line-height: ${LineHeightHeadMobile.HEADING_3};
    font-weight: ${(x) =>
      x.bolder
        ? SharedVariables.FontWeight_800
        : x.bold
        ? SharedVariables.FontWeight_700
        : x.medium
        ? SharedVariables.FontWeight_500
        : x.normal
        ? SharedVariables.FontWeight_400
        : SharedVariables.FontWeight_600};

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

    letter-spacing: ${LetterSpacingHeadMobile.HEADING_3};
  }
`

export const H4 = styled.h4<Type>`
  font-size: ${FontsHeadDesktop.HEADING_4};
  line-height: ${LineHeightHeadDesktop.HEADING_4};
  font-weight: ${(x) =>
    x.bolder
      ? SharedVariables.FontWeight_800
      : x.bold
      ? SharedVariables.FontWeight_700
      : x.medium
      ? SharedVariables.FontWeight_500
      : x.normal
      ? SharedVariables.FontWeight_400
      : SharedVariables.FontWeight_600};

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
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_4};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_4};
    line-height: ${LineHeightHeadMobile.HEADING_4};
    font-weight: ${(x) =>
      x.bolder
        ? SharedVariables.FontWeight_800
        : x.bold
        ? SharedVariables.FontWeight_700
        : x.medium
        ? SharedVariables.FontWeight_500
        : x.normal
        ? SharedVariables.FontWeight_400
        : SharedVariables.FontWeight_600};

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

    letter-spacing: ${LetterSpacingHeadMobile.HEADING_4};
  }
`
