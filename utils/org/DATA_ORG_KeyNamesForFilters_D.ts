import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"

export const DATA_ORG_KeyNamesForFilters_D = {
  COMPONENT: "component",
  PARAMETERS: "parameters",
  SHOULD_ADD_CLASSNAME: "shouldAddClassName",
}

export const enum DATA_ORG_KeyNamesForFilters_D_ENUM {
  COMPONENT = "component",
  PARAMETERS = "parameters",
  SHOULD_ADD_CLASSNAME = "shouldAddClassName",
}

export const enum FiltersRangeKeys {
  "BUTTON_NAME" = "buttonName",
  "LABEL_NAME" = "labelName",
  "MAX" = "max",
  "MIN" = "min",
  "MIN_SPECIAL_CHARACTER" = "minSpecialCharacter",
  "MAX_SPECIAL_CHARACTER" = "maxSpecialCharacter",
  "ADD_CHARACTER_MINSPECIAL_CHARACTER" = "addCharacterMinSpecialCharacter",
  "ADD_CHARACTER_MAXSPECIAL_CHARACTER" = "addCharacterMaxSpecialCharacter",
  "WHICH_MEASURE" = "whichMeasure",
  "ADD_CHARACTER" = "addCharacter",
}

export type TypeSingleFilterRange = {
  [FiltersRangeKeys.BUTTON_NAME]: string
  [FiltersRangeKeys.LABEL_NAME]?: string
  [FiltersRangeKeys.MAX]: string | number
  [FiltersRangeKeys.MIN]: string | number
  [FiltersRangeKeys.MIN_SPECIAL_CHARACTER]?: string
  [FiltersRangeKeys.MAX_SPECIAL_CHARACTER]?: string
  [FiltersRangeKeys.ADD_CHARACTER_MINSPECIAL_CHARACTER]?: "toLeft" | "toRight"
  [FiltersRangeKeys.ADD_CHARACTER_MAXSPECIAL_CHARACTER]?: "toLeft" | "toRight"
  [FiltersRangeKeys.WHICH_MEASURE]: string | "weight"
  [FiltersRangeKeys.ADD_CHARACTER]?: "" | "toLeft" | "toRight" | "weight"
}

export type TypeAllFiltersRange = {
  [category: string]: TypeSingleFilterRange
}

export const enum FiltersCheckboxKeys {
  "BUTTON_NAME" = "buttonName",
  "CATEGORIES_TO_DISPLAY" = "categoriesToDisplay",
  "TITLE_ON_MODAL" = "titleOnModal",
}

type TypeSingleFilterCheckbox = {
  [FiltersCheckboxKeys.BUTTON_NAME]: string
  [FiltersCheckboxKeys.CATEGORIES_TO_DISPLAY]: string[]
  [FiltersCheckboxKeys.TITLE_ON_MODAL]?: string
}

export type TypeAllFiltersCheckbox = {
  [category: string]: TypeSingleFilterCheckbox
}

export const enum AllMoreFilters_KEY {
  RANGES = "RANGES",
  CHECKBOXES = "CHECKBOXES",
}

export type Type_AllMoreFilters = {
  [AllMoreFilters_KEY.RANGES]?: JSX.Element[]
  [AllMoreFilters_KEY.CHECKBOXES]?: JSX.Element[]
}

export type Type_FiltersToUI = {
  [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]:
    | typeof ORG_Filters_D_Range2
    | typeof ORG_Filters_D_Checkbox2
    | typeof ORG_Filters_D_More2
  [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]:
    | TypeSingleFilterRange
    | TypeSingleFilterCheckbox
    | Type_AllMoreFilters
}[]
