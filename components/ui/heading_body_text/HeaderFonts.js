import styled from "styled-components"
import {
  FontsHeadDesktop,
  FontsHeadMobile,
  LineHeightHeadDesktop,
  LineHeightHeadMobile,
  LetterSpacingHeadDesktop,
  LetterSpacingHeadMobile
} from "../../../assets/Fonts/HeadingValues"
import { PRIMARY, NEUTRALS } from "../../../assets/Colors"
import { device } from "../../../assets/screenSizes/ScreenSizes.js"
import { FontsWeights } from "../../../assets/Fonts/Weights"

export const D1 = styled.p`
  font-size: ${FontsHeadDesktop.DISPLAY_1};
  line-height: ${LineHeightHeadDesktop.DISPLAY_1};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLD_700 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.DISPLAY_1};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};

  @media (${device.tablet}) {
    font-size: ${FontsHeadMobile.DISPLAY_1};
    line-height: ${LineHeightHeadMobile.DISPLAY_1};
    font-weight: ${(x) =>
      x.bold ? FontsWeights.BOLD_700 : FontsWeights.SEMIBOLD_600};
    letter-spacing: ${LetterSpacingHeadMobile.DISPLAY_1};
    color: ${(x) =>
      x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};
  }
`

export const H1 = styled.h1`
  /* font-size:   ; */
  font-size:clamp(25px, -2.135rem + 9vw, ${FontsHeadDesktop.HEADING_1});
  line-height: ${LineHeightHeadDesktop.HEADING_1};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_1};
  color: ${(x) =>
    x.logo    
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};

  @media (${device.tablet}) {
    
    font-size:clamp(0.935rem, -1.935rem + 9vw, ${FontsHeadMobile.HEADING_1}); // Check this
    line-height: ${LineHeightHeadMobile.HEADING_1};
    font-weight: ${(x) =>
      x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_1};
    color: ${(x) =>
      x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};
  }
`

export const H2 = styled.h2`
  font-size: ${FontsHeadDesktop.HEADING_2};
  line-height: ${LineHeightHeadDesktop.HEADING_2};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_2};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};

  @media (${device.tablet}) {
    font-size: ${FontsHeadMobile.HEADING_2};
    line-height: ${LineHeightHeadMobile.HEADING_2};
    font-weight: ${(x) =>
      x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_2};
    color: ${(x) =>
      x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};
  }
`

export const H3 = styled.h3`
  font-size: ${FontsHeadDesktop.HEADING_3};
  line-height: ${LineHeightHeadDesktop.HEADING_3};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_3};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};
      
      /* 
      !FH
      Make the typography be fluent until 320px
      */

  @media (${device.tablet}) {
    /* font-size: ${FontsHeadMobile.HEADING_3}; */
    /* font-size:clamp(18px, -1.935rem + 5vw, ${FontsHeadMobile.HEADING_3}); */
    /* font-size:clamp(${FontsHeadMobile.HEADING_3}, -1.935rem + 19vw, 18px); */
    /* font-size: clamp(100%, 1rem + 2vw, ${FontsHeadMobile.HEADING_3}); */
    font-size: clamp(${FontsHeadMobile.HEADING_3}, 1rem + 2vw, 100%);
    line-height: ${LineHeightHeadMobile.HEADING_3};
    font-weight: ${(x) =>
      x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_3};
    color: ${(x) =>
      x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};
  }
`

export const H4 = styled.h4`
  font-size: ${FontsHeadDesktop.HEADING_4};
  line-height: ${LineHeightHeadDesktop.HEADING_4};
  font-weight: ${(x) =>
    x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
  letter-spacing: ${LetterSpacingHeadDesktop.HEADING_4};
  color: ${(x) =>
    x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};

  @media (${device.tablet}) {
    font-size: ${FontsHeadMobile.HEADING_4};
    line-height: ${LineHeightHeadMobile.HEADING_4};
    font-weight: ${(x) =>
      x.bold ? FontsWeights.BOLDER_800 : FontsWeights.SEMIBOLD_600};
    letter-spacing: ${LetterSpacingHeadMobile.HEADING_4};
    color: ${(x) =>
      x.logo
      ? PRIMARY.PRIMARY_LOGO
      : x.cta
      ? PRIMARY.PRIMARY_CTA
      : x.darkGrey
      ? NEUTRALS.DARK_GREY
      : NEUTRALS.BLACK};
  }
`
