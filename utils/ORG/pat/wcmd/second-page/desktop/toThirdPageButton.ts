import { ORG_D_Results_WheretobuySvg } from "@/assets/Icons"
import { SPECIFIC_DATA_KEY, Structure_SpecificData } from "@/utils/ORG/specificData"

export const enum AT_WCMD_D_SEARCH_KEYS {
  BUTTON_TO_THIRDPAGE_NAME_VALUE = "where to buy",
}

export const enum AT_WCMD_D_SEARCH_VALUES {
  BRAND = "Permobile corpus Industries Inc.",
}

export const AT_WCMD_SPECIFIC_DATA: Structure_SpecificData = {
  [SPECIFIC_DATA_KEY.BUTTON_TO_THIRDPAGE_NAME]: AT_WCMD_D_SEARCH_KEYS.BUTTON_TO_THIRDPAGE_NAME_VALUE,
  [SPECIFIC_DATA_KEY.SVG]: ORG_D_Results_WheretobuySvg,
  BRAND: AT_WCMD_D_SEARCH_VALUES.BRAND,
}
