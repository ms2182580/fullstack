import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import { JSXElementConstructor } from "react"
import {
  DATA_ORG_KeyNamesForFilters_D_ENUM,
  FiltersCheckboxKeys,
  FiltersRangeKeys,
} from "../../DATA_ORG_KeyNamesForFilters_D"

/* const DATA_AT_D_Filters = {
  price: {
    buttonName: "Price",
    min: "100",
    max: "50000",
    labelName: "Budget",
    addCharacter: "toLeft",
    whichMeasure: "$",
  },
  weight: {
    buttonName: "Weight Capacity",
    min: "250",
    max: "500",
    labelName: "Weight Capacity",
    addCharacter: "toRight",
    whichMeasure: "weight",
  },
  type: {
    buttonName: "Type",
    titleOnModal: "Type of Wheelchair",
    categoriesToDisplay: ["Manual", "Power", "Transport", "Sports", "Standing"],
  },
  mobility: {
    buttonName: "Mobility",
    titleOnModal: "Mobility Features",
    categoriesToDisplay: [
      "Foldable",
      "Reclinig Backrests",
      "Adjustable Armrests",
      "Adjustable Leg Rests",
      "Power Elevating Seats",
      "Lightweight Frames",
    ],
  },
  seat: {
    buttonName: "Seat",
    titleOnModal: "Seat Dimensions",
    categoriesToDisplay: ["36-50 cm", "50-70 cm", "+75 cm"],
  },
  setting: {
    buttonName: "Setting",
    titleOnModal: "Setting",
    categoriesToDisplay: ["Indoor", "Outdoor"],
  },
} */

export type TypeSingleFilterRange = {
  [FiltersRangeKeys.BUTTON_NAME]: string
  [FiltersRangeKeys.LABEL_NAME]?: string
  [FiltersRangeKeys.MAX]: string
  [FiltersRangeKeys.MIN]: string
  [FiltersRangeKeys.MIN_SPECIAL_CHARACTER]?: string
  [FiltersRangeKeys.MAX_SPECIAL_CHARACTER]?: string
  [FiltersRangeKeys.ADD_CHARACTER_MINSPECIAL_CHARACTER]?: "toLeft" | "toRight"
  [FiltersRangeKeys.ADD_CHARACTER_MAXSPECIAL_CHARACTER]?: "toLeft" | "toRight"
  [FiltersRangeKeys.WHICH_MEASURE]: string | "weight"
  [FiltersRangeKeys.ADD_CHARACTER]?: "" | "toLeft" | "toRight" | "weight"
}

type TypeAllFiltersRange = {
  [category: string]: TypeSingleFilterRange
}

export const FILTERS_RANGE: TypeAllFiltersRange = {
  price: {
    buttonName: "Price",
    labelName: "Budget",
    min: "100",
    max: "50000",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },

  weight: {
    buttonName: "Weight Capacity",
    min: "250",
    max: "500",
    labelName: "Weight Capacity",
    whichMeasure: "weight",
    addCharacter: "toRight",
  },
}

export type TypeSingleFilterCheckbox = {
  [FiltersCheckboxKeys.BUTTON_NAME]: string
  [FiltersCheckboxKeys.CATEGORIES_TO_DISPLAY]: string[]
  [FiltersCheckboxKeys.TITLE_ON_MODAL]?: string
}

type TypeAllFiltersCheckbox = {
  [category: string]: TypeSingleFilterCheckbox
}

export const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  level: {
    buttonName: "Hi-tech",
    categoriesToDisplay: ["High-tech", "Medium-tech", "Low-tech"],
    titleOnModal: "Hi-tech level",
  },

  operativeSystem: {
    buttonName: "Operative System",
    categoriesToDisplay: ["iOS", "Android", "Linux", "Windows"],
  },
}

export type Type_FiltersToUI = {
  [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: JSXElementConstructor<any>
  [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]:
    | TypeSingleFilterRange
    | TypeSingleFilterCheckbox
}[]

export const filtersUI_AssistiveTechnologyHardware: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.price,
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.weight,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.level,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.operativeSystem,
  },
]
