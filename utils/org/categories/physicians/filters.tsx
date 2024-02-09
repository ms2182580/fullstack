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
  practiceAreas: {
    buttonName: "Practice Areas",
    categoriesToDisplay: [
      "Child Psychiatry",
      "Art Therapy",
      "Family Medicine",
      "Geriatric Psychiatry",
      "Addiction Psychiatry",
      "Sleep Medicine",
      "Military and Disaster Psychiatry",
    ],
  },
}

const FILTERS_MORE: Type_AllMoreFilters = {
  RANGES: [
    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_DATA_D.distanceRange.buttonName}
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
      titleOnModal={FILTERS_CHECKBOX.practiceAreas.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.practiceAreas.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.operationHours.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.operationHours}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.viewOnly.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.viewOnly}
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
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
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

export const filtersUI_Physicians: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.practiceAreas,
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
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
