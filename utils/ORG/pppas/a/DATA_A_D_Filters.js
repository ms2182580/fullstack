import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Range_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

export const DATA_A_D_Filters = {
  areasOfFocus: {
    buttonName: "Area(s) of Focus",
    categoriesToDisplay: ["Housing Advocacy", "Food Rescue", "Healthcare", "Animal Welfare", "Mental Health", "Gender Equality", "Arts and Culture"],
  },
  servicesOffered: {
    buttonName: "Services Offered",
    categoriesToDisplay: ["Housing", "Rent Relief", "Home-Owner Assistance Fund", "Mortgage Assistance", "Emergency Rent Relief", "Public Housing Initiatives"],
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
  ],

  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_A_D_Filters.areasOfFocus.buttonName}
      categoriesToDisplay={DATA_A_D_Filters.areasOfFocus.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_A_D_Filters.servicesOffered.buttonName}
      categoriesToDisplay={DATA_A_D_Filters.servicesOffered.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.alternativeTitle}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.serviceSetting.titleToShow}
      categoriesToDisplay={["Office", "Virtual", "Site determined by client"]}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.operationHours.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.operationHours}
    />,
  ],
}

export const filtersUI_PPPAS = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_A_D_Filters.areasOfFocus.buttonName,
      categoriesToDisplay: DATA_A_D_Filters.areasOfFocus.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_A_D_Filters.servicesOffered.buttonName,
      categoriesToDisplay: DATA_A_D_Filters.servicesOffered.categoriesToDisplay,
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
      buttonName: ORG_FILTERS_KEYS_D.operationHours.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.operationHours,
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
