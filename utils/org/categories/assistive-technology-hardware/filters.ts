import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import {
  TypeAllFiltersCheckbox,
  TypeAllFiltersRange,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const FILTERS_RANGE: TypeAllFiltersRange = {
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

const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
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
