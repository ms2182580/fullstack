import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range2"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

export const DATA_LT_D_Filters = {
  priceRange: {
    buttonName: "Price",
    nameOnCard: "Price per month",
    minimum: "500",
    maximum: "10000",
    maxSpecialCharacter: "+",
    addCharacterMaxSpecialCharacter: true,
    whichMeasure: "$",
    addCharacter: "toLeft",
  },

  duration: {
    buttonName: "Duration",
    minimum: "1",
    maximum: "12",
    maxSpecialCharacter: "+",
    minSpecialCharacter: "-",
    addCharacterMaxSpecialCharacter: "toLeft",
    addCharacterMinSpecialCharacter: "toLeft",
    whichMeasure: "months",
    addCharacter: "toRight",
  },

  houseType: {
    buttonName: "Type",
    buttonOnCard: "Housing type",
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
  moreFilters: {
    specialties: {
      buttonName: "Specialties",
      categoriesToDisplay: [
        "Behavior therapy",
        "Speech & Language",
        "Occupational",
        "Physical Therapy",
        "Psychology",
        "Art Therapy",
        "Music Therapy",
        "Play Therapy",
        "Geriatric Therapy",
        "Family Therapy",
        "Dance therapy",
        "Pain Management Therapy",
        "Sexual Abuse Therapy",
        "Post-Traumatic Stress Disorder",
        "Eating Dirorder Therapy",
        "Depression Therapy",
        "Anxiety Therapy",
        "Couples Therapy",
        "Trauma Therapy",
      ],
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
}

const allMoreFilters = {
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_LT_D_Filters.moreFilters.specialties.buttonName}
      categoriesToDisplay={DATA_LT_D_Filters.moreFilters.specialties.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,
  ],
}

export const filtersUI_PRP = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_LT_D_Filters.priceRange.buttonName,
      labelName: DATA_LT_D_Filters.priceRange.nameOnCard,
      min: DATA_LT_D_Filters.priceRange.minimum,
      max: DATA_LT_D_Filters.priceRange.maximum,
      whichMeasure: DATA_LT_D_Filters.priceRange.whichMeasure,
      addCharacter: DATA_LT_D_Filters.priceRange.addCharacter,
      maxSpecialCharacter: DATA_LT_D_Filters.priceRange.maxSpecialCharacter,
      addCharacterMaxSpecialCharacter: true,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      labelName: ORG_FILTERS_KEYS_D.agesServedRange.buttonOnMoreFilter,
      min: ORG_FILTERS_DATA_D.agesServedRange.minimum + 3,
      max: ORG_FILTERS_DATA_D.agesServedRange.maximum,
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
      addCharacter: ORG_FILTERS_DATA_D.agesServedRange.addCharacter,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      min: ORG_FILTERS_DATA_D.distanceRange.minimum,
      max: ORG_FILTERS_DATA_D.distanceRange.maximum,
      buttonName: ORG_FILTERS_KEYS_D.distanceRange.buttonName,
      addCharacter: ORG_FILTERS_DATA_D.distanceRange.addCharacter,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_LT_D_Filters.duration.buttonName,
      min: DATA_LT_D_Filters.duration.minimum,
      max: DATA_LT_D_Filters.duration.maximum,
      addCharacter: DATA_LT_D_Filters.duration.addCharacter,
      whichMeasure: DATA_LT_D_Filters.duration.whichMeasure,

      minSpecialCharacter: DATA_LT_D_Filters.duration.minSpecialCharacter,
      maxSpecialCharacter: DATA_LT_D_Filters.duration.maxSpecialCharacter,
      addCharacterMaxSpecialCharacter: DATA_LT_D_Filters.duration.addCharacterMaxSpecialCharacter,
      addCharacterMinSpecialCharacter: DATA_LT_D_Filters.duration.addCharacterMinSpecialCharacter,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_LT_D_Filters.houseType.buttonName,
      titleOnModal: DATA_LT_D_Filters.houseType.buttonOnCard,
      categoriesToDisplay: DATA_LT_D_Filters.houseType.categoriesToDisplay,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_LT_D_Filters.accommodations.buttonName,
      categoriesToDisplay: DATA_LT_D_Filters.accommodations.categoriesToDisplay,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      allCheckboxes: allMoreFilters.checkbox,
    },

    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
]
