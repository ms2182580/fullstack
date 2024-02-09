import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "@/utils/ORG_FiltersCategories"
import {
  TypeAllFiltersCheckbox,
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  outOfPocketFees: {
    buttonName: "Out-of-Pocket fees",
    categoriesToDisplay: [
      "0-50",
      "50-150",
      "150-250",
      "250-300",
      "300-350",
      "350-400",
      "400-450",
      "450-500",
      "+500",
    ],
  },
}

const FILTERS_MORE: Type_AllMoreFilters = {
  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.outOfPocketFees.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.outOfPocketFees.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.providerType.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.providerType}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.wheelChair.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.wheelChair}
    />,
  ],
}

export const filtersUI_MentalHealth: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.diagnosis.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.diagnosis,
    },
  },

  {
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      min: ORG_FILTERS_DATA_D.agesServedRange.min,
      max: ORG_FILTERS_DATA_D.agesServedRange.max,
      maxSpecialCharacter:
        ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter,
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
      addCharacter: "toRight",
      addCharacterMaxSpecialCharacter: "toLeft",
    },
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.distanceRange.buttonName,
      min: ORG_FILTERS_DATA_D.distanceRange.min,
      max: ORG_FILTERS_DATA_D.distanceRange.max,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
      addCharacter: "toRight",
    },
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.viewOnly.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.viewOnly,
    },
  },

  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
