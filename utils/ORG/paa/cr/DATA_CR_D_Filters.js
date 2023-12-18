import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

export const DATA_CR_D_Filters = {
  areasOfLaw: {
    buttonName: "Area(s) of Law",

    categoriesToDisplay: [
      "Civil Rights",
      "Disability Rights",
      "Public Accomodations",
      "Employment Discrimination",
      "Housing Discrimination",
      "Police Misconduct",
      "Prisoners' Rights",
      "Voting Rights",
      "Education Discrimination",
      "LGBTQ+",
      "Immigration Rights",
    ],
  },

  jurisdiction: {
    buttonName: "Jurisdiction",
    titleOnModal: "Jurisdictions Admitted to Practice",
    categoriesToDisplay: ["New York", "New Jersey", "Connecticut", "California", "Texas", "Florida", "Illinois", "Pennsylvania"],
  },

  professionalExperience: {
    buttonName: "Professional Experience",
    categoriesToDisplay: ["Private Practice", "Law Firm", "Clerkship", "Government Agencies", "In-House Counsel", "Public Interest Organizations"],
  },

  languajesSpoken: {
    buttonName: "Language(s) Spoken",
    categoriesToDisplay: ["English", "Spanish", "Cantonese", "Chinese", "Tagalog", "French"],
  },

  moreFilters: {
    operationHours: {
      buttonName: "Operation Hours",
      categoriesToDisplay: ["Open Now", "Weekday", "Weekdays & Weekends", "After Hours"],
    },

    payment: {
      buttonName: "Payment",
      categoriesToDisplay: ["Free Consultation", "Retainer Minimum", "Payment Plan", "Flat Fee", "Hourly Rate", "Contingency Fee"],
    },

    price: {
      buttonName: "Price",
      minimumSpecialCharacter: "Pro Bono",
      minimum: "0",
      maximum: "100000.00",
      whichMeasure: "$",
      addCharacter: "toLeft",
    },

    distance: {
      buttonName: "Distance",
      minimum: "0",
      maximum: "20",
      whichMeasure: "miles",
      addCharacter: "toRight",
    },
    agesServed: {
      buttonName: "Ages Served",
      minimum: "0",
      maximum: "100",
      maximumSpecialCharacter: "100+",
      whichMeasure: "years",
      addCharacter: "toRight",
    },
  },
}

const allMoreFilters = {
  range: [
    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CR_D_Filters.moreFilters.price.buttonName}
      min={DATA_CR_D_Filters.moreFilters.price.minimum}
      max={DATA_CR_D_Filters.moreFilters.price.maximum}
      whichMeasure={DATA_CR_D_Filters.moreFilters.price.whichMeasure}
      addCharacter={DATA_CR_D_Filters.moreFilters.price.addCharacter}
      minSpecialCharacter={DATA_CR_D_Filters.moreFilters.price.minimumSpecialCharacter}
      addCharacterMinSpecialCharacter={false}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CR_D_Filters.moreFilters.distance.buttonName}
      min={DATA_CR_D_Filters.moreFilters.distance.minimum}
      max={DATA_CR_D_Filters.moreFilters.distance.maximum}
      addCharacter={DATA_CR_D_Filters.moreFilters.distance.addCharacter}
      whichMeasure={DATA_CR_D_Filters.moreFilters.distance.whichMeasure}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CR_D_Filters.moreFilters.agesServed.buttonName}
      min={DATA_CR_D_Filters.moreFilters.agesServed.minimum}
      max={DATA_CR_D_Filters.moreFilters.agesServed.maximum}
      maxSpecialCharacter={DATA_CR_D_Filters.moreFilters.agesServed.maximumSpecialCharacter}
      addCharacter={DATA_CR_D_Filters.moreFilters.agesServed.addCharacter}
      whichMeasure={DATA_CR_D_Filters.moreFilters.agesServed.whichMeasure}
    />,
  ],
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.areasOfLaw.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.areasOfLaw.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.jurisdiction.titleOnModal}
      categoriesToDisplay={DATA_CR_D_Filters.jurisdiction.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.professionalExperience.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.professionalExperience.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.languajesSpoken.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.languajesSpoken.categoriesToDisplay}
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
      titleOnModal={DATA_CR_D_Filters.moreFilters.operationHours.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.moreFilters.operationHours.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CR_D_Filters.moreFilters.payment.buttonName}
      categoriesToDisplay={DATA_CR_D_Filters.moreFilters.payment.categoriesToDisplay}
    />,
  ],
}

/* renderFiltersInUI_AA_CR */

export const filtersUI_PAA = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_CR_D_Filters.areasOfLaw.buttonName,
      categoriesToDisplay: DATA_CR_D_Filters.areasOfLaw.categoriesToDisplay,
    },
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_CR_D_Filters.jurisdiction.buttonName,
      titleOnModal: DATA_CR_D_Filters.jurisdiction.titleOnModal,
      categoriesToDisplay: DATA_CR_D_Filters.jurisdiction.categoriesToDisplay,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_CR_D_Filters.professionalExperience.buttonName,
      categoriesToDisplay: DATA_CR_D_Filters.professionalExperience.categoriesToDisplay,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_CR_D_Filters.languajesSpoken.buttonName,
      categoriesToDisplay: DATA_CR_D_Filters.languajesSpoken.categoriesToDisplay,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      allCheckboxes: allMoreFilters.checkbox,
      allRanges: allMoreFilters.range,
    },
  },
]
