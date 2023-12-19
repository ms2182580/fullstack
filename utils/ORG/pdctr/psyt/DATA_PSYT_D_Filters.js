import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

const DATA_PSYT_D_Filters = {
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

  operationHours: {
    buttonName: "Operation Hours",
    categoriesToDisplay: ["Open Now", "Weekdays", "Weekdays & Weekends", "Morning", "Afternoon", "Evening", "Late Night"],
  },

  viewOnly: {
    buttonName: "View Only",
    categoriesToDisplay: ["Accepting new clients", "Conducts evaluations", "Free consultation", "Referral not required"],
  },

  moreFilters: {
    payment: {
      buttonName: "Payment Options",
      categoriesToDisplay: ["Private pay", "Medicaid", "DOE", "Cash Discount", "Military Insurance"],
    },

    providerType: {
      buttonName: "Provider Type",
      categoriesToDisplay: ["Private practice", "Agency-based", "Independent", "Academic or Research-Based", "Group practice"],
    },
    wheelChair: {
      buttonName: "Wheelchair Accessible",
      categoriesToDisplay: ["Yes", "No"],
    },
  },
}

const allMoreFilters = {
  range: [
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
      maxSpecialCharacter={ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter}
      whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
    />,
  ],
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_PSYT_D_Filters.practiceAreas.buttonName}
      categoriesToDisplay={DATA_PSYT_D_Filters.practiceAreas.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.alternativeTitle}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_PSYT_D_Filters.operationHours.buttonName}
      categoriesToDisplay={DATA_PSYT_D_Filters.operationHours.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_PSYT_D_Filters.viewOnly.buttonName}
      categoriesToDisplay={DATA_PSYT_D_Filters.viewOnly.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_PSYT_D_Filters.moreFilters.payment.buttonName}
      categoriesToDisplay={DATA_PSYT_D_Filters.moreFilters.payment.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_PSYT_D_Filters.moreFilters.providerType.buttonName}
      categoriesToDisplay={DATA_PSYT_D_Filters.moreFilters.providerType.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_PSYT_D_Filters.moreFilters.wheelChair.buttonName}
      categoriesToDisplay={DATA_PSYT_D_Filters.moreFilters.wheelChair.categoriesToDisplay}
    />,
  ],
}

export const filtersUI_PDCTR = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_PSYT_D_Filters.practiceAreas.buttonName,
      categoriesToDisplay: DATA_PSYT_D_Filters.practiceAreas.categoriesToDisplay,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.language.alternativeTitle,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_PSYT_D_Filters.operationHours.buttonName,
      categoriesToDisplay: DATA_PSYT_D_Filters.operationHours.categoriesToDisplay,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.diagnosis.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.diagnosis,
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_PSYT_D_Filters.viewOnly.buttonName,
      categoriesToDisplay: DATA_PSYT_D_Filters.viewOnly.categoriesToDisplay,
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
