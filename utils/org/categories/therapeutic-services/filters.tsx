import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "@/utils/ORG_FiltersCategories"
import {
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const FILTERS_MORE: Type_AllMoreFilters = {
  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.serviceSetting.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.serviceSetting}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.sessionType.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.sessionType}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.providerType.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.providerType}
    />,
  ],
}

export const filtersUI_Therapeutic: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      min: ORG_FILTERS_DATA_D.agesServedRange.min,
      max: ORG_FILTERS_DATA_D.agesServedRange.max,
      maxSpecialCharacter:
        ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter,
      addCharacterMaxSpecialCharacter: "toLeft",
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
      addCharacter: "toRight",
    },
  },

  {
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_DATA_D.distanceRange.buttonName,
      min: ORG_FILTERS_DATA_D.distanceRange.min,
      max: ORG_FILTERS_DATA_D.distanceRange.max,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
      addCharacter: "toRight",
    },
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.diagnosis.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.diagnosis,
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
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.insurance.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.insurance,
    },
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.meetingFormat.inMoreFilters,
      categoriesToDisplay: ORG_FILTERS_DATA_D.meetingFormat,
    },
  },

  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
