import { ORG_Filters_D_Checkbox2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Range_Isolated } from "../../../../components/org/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

const DATA_SES_D_Filters = {
  schoolType: {
    buttonName: "School Type",
    categoriesToDisplay: ["Public", "Private", "Private (DOE - Approved)", "International Schools", "Montessori Schools", "Online Schools"],
  },
  price: {
    buttonName: "Price",
    minimum: "0",
    maximum: "100000.00",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },

  servicesOffered: {
    buttonName: "Services Offered",
    categoriesToDisplay: ["Housing", "Rent Relief", "Home-Owner Assistance Fund", "Mortgage Assistance", "Emergency Rent Relief", "Public Housing Initiatives"],
  },

  moreFilters: {
    coEd: {
      buttonName: "Co-ed",
      categoriesToDisplay: ["Coed", "All Boys", "All Girls"],
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

    religionAfiliation: {
      buttonName: "Religion Affiliation",
      categoriesToDisplay: ["Buddhist", "Catholic", "Christian", "Hindu", "Islam", "Judaism", "Protestantism", "Agnostic", "Atheist"],
    },

    language: {
      buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
    servicesOffered: {
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
  },
}

const allMoreFilters = {
  ranges: [
    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.distanceRange.buttonName}
      min={ORG_FILTERS_DATA_D.distanceRange.minimum}
      max={ORG_FILTERS_DATA_D.distanceRange.maximum}
      whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      addCharacter={ORG_FILTERS_DATA_D.distanceRange.addCharacter}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.agesServedRange.buttonName}
      min={ORG_FILTERS_DATA_D.agesServedRange.minimum}
      max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
      whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_SES_D_Filters.price.buttonName}
      min={DATA_SES_D_Filters.price.minimum}
      max={DATA_SES_D_Filters.price.maximum}
      whichMeasure={DATA_SES_D_Filters.price.whichMeasure}
      addCharacter={DATA_SES_D_Filters.price.addCharacter}
    />,
  ],

  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_SES_D_Filters.schoolType.buttonName}
      categoriesToDisplay={DATA_SES_D_Filters.schoolType.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_SES_D_Filters.moreFilters.coEd.buttonName}
      categoriesToDisplay={DATA_SES_D_Filters.moreFilters.coEd.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_SES_D_Filters.moreFilters.specialties.buttonName}
      categoriesToDisplay={DATA_SES_D_Filters.moreFilters.specialties.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.serviceSetting.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.serviceSetting}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_SES_D_Filters.moreFilters.religionAfiliation.buttonName}
      categoriesToDisplay={DATA_SES_D_Filters.moreFilters.religionAfiliation.categoriesToDisplay}
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
      titleOnModal={DATA_SES_D_Filters.moreFilters.servicesOffered.buttonName}
      categoriesToDisplay={DATA_SES_D_Filters.moreFilters.servicesOffered.categoriesToDisplay}
    />,
  ],
}

export const filtersUI_PSES = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_SES_D_Filters.schoolType.buttonName,
      categoriesToDisplay: DATA_SES_D_Filters.schoolType.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      min: ORG_FILTERS_DATA_D.agesServedRange.minimum,
      max: ORG_FILTERS_DATA_D.agesServedRange.maximum,
      addCharacter: ORG_FILTERS_DATA_D.agesServedRange.addCharacter,
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
      maxSpecialCharacter: ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.distanceRange.buttonName,
      min: ORG_FILTERS_DATA_D.distanceRange.minimum,
      max: ORG_FILTERS_DATA_D.distanceRange.maximum,
      addCharacter: ORG_FILTERS_DATA_D.distanceRange.addCharacter,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.language.alternativeTitle,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.serviceSetting.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.serviceSetting,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      allCheckboxes: allMoreFilters.checkbox,
      allRanges: allMoreFilters.ranges,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
]
