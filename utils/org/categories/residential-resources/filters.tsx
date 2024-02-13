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
  TypeAllFiltersRange,
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const FILTERS_RANGE: TypeAllFiltersRange = {
  pricePerMonth: {
    buttonName: "Price",
    labelName: "Price per month",
    min: "500",
    max: "10000",
    maxSpecialCharacter: "+",
    addCharacterMaxSpecialCharacter: "toLeft",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },
  duration: {
    buttonName: "Duration",
    min: "1",
    max: "12",
    maxSpecialCharacter: "+",
    minSpecialCharacter: "-",
    addCharacterMaxSpecialCharacter: "toLeft",
    addCharacterMinSpecialCharacter: "toLeft",
    whichMeasure: "months",
    addCharacter: "toRight",
  },
}

const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  houseType: {
    buttonName: "Type",
    titleOnModal: "Housing type",
    categoriesToDisplay: ["Female only", "Male only", "Coed"],
  },

  accommodations: {
    buttonName: "Accommodations",
    categoriesToDisplay: [
      "Shared",
      "Private",
      "Dormitories",
      "Hotels",
      "Hostels",
      "Motels",
      "Bed and Breakfast (B&B)",
      "Guesthouses",
      "Vacations Rentals",
      "Resorts",
      "Campgrounds",
      "Apartments",
    ],
  },

  specialties: {
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
  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.specialties.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.specialties.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,
  ],
}

export const filtersUI_ResidentialResources: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.pricePerMonth,
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
    parameters: FILTERS_RANGE.duration,
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.houseType,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.accommodations,
  },

  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
