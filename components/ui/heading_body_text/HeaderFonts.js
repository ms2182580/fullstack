import styled from "styled-components"
import { NEUTRALS, PRIMARY } from "../../../assets/Colors"
import {
  FontsDesktopAndMobile,
  FontsHeadDesktop,
  FontsHeadMobile,
  LetterSpacingHeadDesktop,
  LetterSpacingHeadMobile,
  LineHeightHeadDesktop,
  LineHeightHeadMobile
} from "../../../assets/Fonts/HeadingValues"
import { FontsWeights } from "../../../assets/Fonts/Weights"
import { device } from "../../../assets/screenSizes/ScreenSizes.js"

const SharedVariables = {
  FontWeight_400: `${FontsWeights.REGULAR_400}`,
  FontWeight_500: `${FontsWeights.MEDIUM_500}`,
  FontWeight_600: `${FontsWeights.SEMIBOLD_600}`,
  FontWeight_700: `${FontsWeights.BOLD_700}`,
  FontWeight_800: `${FontsWeights.BOLDER_800}`,
  FontSizeBody: `${FontsDesktopAndMobile.BODY_16}`,
  FontSizeCaption: `${FontsDesktopAndMobile.CAPTION_12}`,
  Underline: "underline",
  LineThrough: "line-through"
}

export const D1 = styled.p`
  font-size: ${FontsHeadDesktop.DISPLAY_1};
  line-height: ${LineHeightHeadDesktop.DISPLAY_1};
  font-weight: ${(x) => (x.bold ? FontsWeights.BOLD_700 : FontsWeights.SEMIBOLD_600)};
  letter-spacing: ${LetterSpacingHeadDesktop.DISPLAY_1};
  color: ${(x) =>
    x.logo ? PRIMARY.PRIMARY_LOGO : x.cta ? PRIMARY.PRIMARY_CTA : x.darkGrey ? NEUTRALS.DARK_GREY : NEUTRALS.BLACK};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.DISPLAY_1};
    line-height: ${LineHeightHeadMobile.DISPLAY_1};
    font-weight: ${(x) => (x.bold ? FontsWeights.BOLD_700 : FontsWeights.SEMIBOLD_600)};
    letter-spacing: ${LetterSpacingHeadMobile.DISPLAY_1};
    color: ${(x) =>
    x.logo ? PRIMARY.PRIMARY_LOGO : x.cta ? PRIMARY.PRIMARY_CTA : x.darkGrey ? NEUTRALS.DARK_GREY : NEUTRALS.BLACK};
  }
`

export const H1 = styled.h1`
  font-size: ${FontsHeadDesktop.HEADING_1};
  line-height: ${LineHeightHeadDesktop.HEADING_1};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLDER_800 : x.semi_bold ? FontsWeights.BOLD_700 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_1};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
        ? PRIMARY.PRIMARY_CTA
        : x.hover
          ? PRIMARY.PRIMARY_HOVER
          : x.darkGrey
            ? NEUTRALS.DARK_GREY
            : NEUTRALS.BLACK};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_1};
    line-height: ${LineHeightHeadMobile.HEADING_1};
    font-weight: ${(x) => (x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600)};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_1};
    color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
        ? PRIMARY.PRIMARY_CTA
        : x.hover
          ? PRIMARY.PRIMARY_HOVER
          : x.darkGrey
            ? NEUTRALS.DARK_GREY
            : NEUTRALS.BLACK};
  }
`

export const H2 = styled.h2`
  font-size: ${FontsHeadDesktop.HEADING_2};
  line-height: ${LineHeightHeadDesktop.HEADING_2};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLDER_800 : x.semi_bold ? FontsWeights.SEMIBOLD_600 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_2};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
        ? PRIMARY.PRIMARY_CTA
        : x.hover
          ? PRIMARY.PRIMARY_HOVER
          : x.darkGrey
            ? NEUTRALS.DARK_GREY
            : NEUTRALS.BLACK};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_2};
    line-height: ${LineHeightHeadMobile.HEADING_2};
    /* font-weight: ${(x) => (x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600)}; */
    
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
            
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_2};
    color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
        ? PRIMARY.PRIMARY_CTA
        : x.hover
          ? PRIMARY.PRIMARY_HOVER
          : x.darkGrey
            ? NEUTRALS.DARK_GREY
            : NEUTRALS.BLACK};
  }
`

export const H3 = styled.h3`
  font-size: ${FontsHeadDesktop.HEADING_3};
  line-height: ${LineHeightHeadDesktop.HEADING_3};
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
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_3};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
        ? PRIMARY.PRIMARY_CTA
        : x.hover
          ? PRIMARY.PRIMARY_HOVER
          : x.darkGrey
            ? NEUTRALS.DARK_GREY
            : NEUTRALS.BLACK};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_3};
    line-height: ${LineHeightHeadMobile.HEADING_3};
    font-weight: ${(x) => (x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600)};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_3};
    color: ${(x) =>
    x.logo ? PRIMARY.PRIMARY_LOGO : x.cta ? PRIMARY.PRIMARY_CTA : x.darkGrey ? NEUTRALS.DARK_GREY : NEUTRALS.BLACK};
  }
`

export const H4 = styled.h4`
  font-size: ${FontsHeadDesktop.HEADING_4};
  line-height: ${LineHeightHeadDesktop.HEADING_4};
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
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_4};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
        ? PRIMARY.PRIMARY_CTA
        : x.hover
          ? PRIMARY.PRIMARY_HOVER
          : x.darkGrey
            ? NEUTRALS.DARK_GREY
            : NEUTRALS.BLACK};

  @media (${device.laptop}) {
    font-size: ${FontsHeadMobile.HEADING_4};
    line-height: ${LineHeightHeadMobile.HEADING_4};
    font-weight: ${(x) => (x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600)};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_4};
    color: ${(x) =>
    x.logo ? PRIMARY.PRIMARY_LOGO : x.cta ? PRIMARY.PRIMARY_CTA : x.darkGrey ? NEUTRALS.DARK_GREY : NEUTRALS.BLACK};
  }
`
