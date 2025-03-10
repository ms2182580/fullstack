import { FC } from "react"

export const enum BRAND_OPTION_DEFAULT {
  DEFAULT = "DEFAULT",
}

type BRAND_OPTIONS = FC | BRAND_OPTION_DEFAULT

export const enum SPECIFIC_DATA_KEY {
  SPECIFIC_DATA_KEY = "SPECIFIC_DATA_KEY",
  BUTTON_TO_THIRDPAGE_NAME = "BUTTON_TO_THIRDPAGE_NAME",
  SVG = "SVG",
  BRAND = "BRAND",
  THIRD_PAGE_DATA = "THIRD_PAGE_DATA",
  LAYOUT_RESULTS_MAIN_CARD = "LAYOUT_RESULTS_MAIN_CARD",
  HAVE_VERIFIED = "HAVE_VERIFIED",
}

export enum LAYOUT_RESULTS_MAIN_CARD_VALUES {
  DEFAULT = "DEFAULT",
  VES_LIKE = "VES_LIKE",
  AT_WCMD_LIKE = "AT_LIKE",
  AT_ACS_LIKE = "AT_ACS_LIKE",
}

export type Structure_SpecificData = {
  [SPECIFIC_DATA_KEY.SVG]?: BRAND_OPTIONS
  [SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME]?: string
  [SPECIFIC_DATA_KEY.BRAND]?: string
  [SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD]?: LAYOUT_RESULTS_MAIN_CARD_VALUES
  [SPECIFIC_DATA_KEY.HAVE_VERIFIED]?: boolean
}

export const enum BUTTON_TO_THIRDPAGE_TEXT_OPTIONS {
  "where to buy" = "where to buy",
  "request consultation" = "request consultation",
  "default" = "see availability",
  "contact us" = "contact us",
  "apply now" = "apply now",
}

export const enum SPECIFIC_DATA_SECOND_PAGE {
  SECOND_PAGE = "SECOND_PAGE",
  BUTTON_TO_THIRDPAGE_TEXT = "BUTTON_TO_THIRDPAGE_TEXT",
  SVG = "SVG",
  FILTERS = "FILTERS",
}
