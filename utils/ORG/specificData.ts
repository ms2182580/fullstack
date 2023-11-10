import { FC } from "react"

export const enum SPECIFIC_DATA_KEY {
  SPECIFIC_DATA_KEY = "SPECIFIC_DATA_KEY",
  BUTTON_TO_THIRDPAGE_NAME = "BUTTON_TO_THIRDPAGE_NAME",
  SVG = "SVG",
  BRAND = "BRAND",
}

export type Structure_SpecificData = {
  [SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME]: string
  [SPECIFIC_DATA_KEY.SVG]: FC | "default"
  [SPECIFIC_DATA_KEY.BRAND]?: string
}
