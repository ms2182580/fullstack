import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Range_Isolated"
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
  areasOfFocus: {
    buttonName: "Area(s) of Focus",
    categoriesToDisplay: [
      "Housing Advocacy",
      "Food Rescue",
      "Healthcare",
      "Animal Welfare",
      "Mental Health",
      "Gender Equality",
      "Arts and Culture",
    ],
  },
  servicesOffered: {
    buttonName: "Services Offered",
    categoriesToDisplay: [
      "Housing",
      "Rent Relief",
      "Home-Owner Assistance Fund",
      "Mortgage Assistance",
      "Emergency Rent Relief",
      "Public Housing Initiatives",
    ],
  },
}

const FILTERS_MORE: Type_AllMoreFilters = {
  RANGES: [
    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.distanceRange.buttonName}
      min={ORG_FILTERS_DATA_D.distanceRange.min}
      max={ORG_FILTERS_DATA_D.distanceRange.max}
      whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      addCharacter={"toRight"}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.agesServed.titleToShow}
      min={ORG_FILTERS_DATA_D.agesServedRange.min}
      max={ORG_FILTERS_DATA_D.agesServedRange.max}
      whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      addCharacter={"toRight"}
      maxSpecialCharacter={
        ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter
      }
      addCharacterMaxSpecialCharacter={"toLeft"}
    />,
  ],

  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.areasOfFocus.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.areasOfFocus.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.servicesOffered.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.servicesOffered.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.operationHours.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.operationHours}
    />,
  ],
}

export const filtersUI_Agencies: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.areasOfFocus,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.servicesOffered,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.operationHours.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.operationHours,
    },
  },

  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
