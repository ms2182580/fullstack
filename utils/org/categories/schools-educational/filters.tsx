import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Range_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Range_Isolated"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "@/utils/ORG_FiltersCategories"
import {
  TypeAllFiltersCheckbox,
  TypeAllFiltersRange,
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const FILTERS_RANGE: TypeAllFiltersRange = {
  price: {
    buttonName: "Price",
    min: "0",
    max: "100000",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },
}

const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  schoolType: {
    buttonName: "School Type",
    categoriesToDisplay: [
      "Public",
      "Private",
      "Private (DOE - Approved)",
      "International Schools",
      "Montessori Schools",
      "Online Schools",
    ],
  },
  specialties: {
    buttonName: "Specialties",
    categoriesToDisplay: [
      "Assistive Technology",
      "Applied Behavior Analysis (ABA)",
      "Speech-Language Pathology",
      "Occupational Therapy",
      "Applied Therapies",
      "Assistive Communication",
      "Special Education Advocacy",
      "Online Instruction and Support",
    ],
  },

  servicesOffered: {
    buttonName: "Specialties",
    categoriesToDisplay: [
      "Anxiety Therapy",
      "Art Therapy",
      "Behavior therapy",
      "Couples Therapy",
      "Dance therapy",
      "Depression Therapy",
      "Eating Dirorder Therapy",
      "Family Therapy",
      "Geriatric Therapy",
      "Music Therapy",
      "Occupational",
      "Pain Management Therapy",
      "Physical Therapy",
      "Play Therapy",
      "Post-Traumatic Stress Disorder",
      "Psychology",
      "Sexual Abuse Therapy",
      "Speech & Language",
      "Trauma Therapy",
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
    <ORG_Filters_D_Range_Isolated
      buttonName={FILTERS_RANGE.price.buttonName}
      min={FILTERS_RANGE.price.min}
      max={FILTERS_RANGE.price.max}
      whichMeasure={FILTERS_RANGE.price.whichMeasure}
      addCharacter={FILTERS_RANGE.price.addCharacter}
    />,
  ],

  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.schoolType.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.schoolType.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.coed.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.coed}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.specialties.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.specialties.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.religion.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.religion}
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
      titleOnModal={FILTERS_CHECKBOX.servicesOffered.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.servicesOffered.categoriesToDisplay}
    />,
  ],
}

export const filtersUI_SchoolsEducational: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.schoolType,
  },

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
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.priceRange.titleToShow,
      min: ORG_FILTERS_DATA_D.priceRange.min,
      max: ORG_FILTERS_DATA_D.priceRange.max,
      whichMeasure: ORG_FILTERS_DATA_D.priceRange.whichMeasure,
      addCharacter: "toLeft",
    },
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
  },
  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
