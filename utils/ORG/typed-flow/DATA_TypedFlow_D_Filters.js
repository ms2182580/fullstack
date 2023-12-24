import { ORG_Filters_D_Checkbox2 } from "../../../components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../components/org/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Range_Isolated } from "../../../components/org/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../DATA_ORG_KeyNamesForFilters_D"

export const DATA_TypedFlow_D_Filters = {
  category: {
    buttonName: "Category",
    categoriesToDisplay: [""],
  },

  // distance: {
  //   buttonName: ORG_FILTERS_KEYS_D.distanceRange.buttonName,
  //   min: ORG_FILTERS_DATA_D.distanceRange.minimum,
  //   max: ORG_FILTERS_DATA_D.distanceRange.maximum,
  //   whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
  //   addCharacter: ORG_FILTERS_DATA_D.distanceRange.addCharacter,
  // },

  // age: {
  //   buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
  //   min: ORG_FILTERS_DATA_D.agesServedRange.minimum,
  //   max: ORG_FILTERS_DATA_D.agesServedRange.maximum,
  //   maxSpecialCharacter: ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter,
  //   whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
  //   addCharacter: ORG_FILTERS_DATA_D.agesServedRange.addCharacter,
  // },

  language: {
    buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
    categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
  },

  price: {
    buttonName: "Price",
    min: "100",
    max: "999999",
    labelName: "Budget",
    addCharacter: "toLeft",
    whichMeasure: "$",
  },

  setting: {
    buttonName: ORG_FILTERS_KEYS_D.serviceSetting.titleToShow,
    categoriesToDisplay: ORG_FILTERS_DATA_D.serviceSetting,
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
      titleOnModal={ORG_FILTERS_KEYS_D.language.alternativeTitle}
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
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,
  ],
}

export const renderFiltersInUI_TypedFlow = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_TypedFlow_D_Filters.category.buttonName,
      categoriesToDisplay: DATA_TypedFlow_D_Filters.category.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.distanceRange.buttonName,
      min: ORG_FILTERS_DATA_D.distanceRange.minimum,
      max: ORG_FILTERS_DATA_D.distanceRange.maximum,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
      addCharacter: ORG_FILTERS_DATA_D.distanceRange.addCharacter,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      min: ORG_FILTERS_DATA_D.agesServedRange.minimum,
      max: ORG_FILTERS_DATA_D.agesServedRange.maximum,
      maxSpecialCharacter: ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter,
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
      addCharacter: ORG_FILTERS_DATA_D.agesServedRange.addCharacter,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_TypedFlow_D_Filters.price.buttonName,
      min: DATA_TypedFlow_D_Filters.price.min,
      max: DATA_TypedFlow_D_Filters.price.max,
      labelName: DATA_TypedFlow_D_Filters.price.labelName,
      addCharacter: DATA_TypedFlow_D_Filters.price.addCharacter,
      whichMeasure: DATA_TypedFlow_D_Filters.price.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.serviceSetting.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.serviceSetting,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: "TYPEDFLOW_SETTING_RANGE",
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      allCheckboxes: allMoreFilters.checkbox,
      allRanges: allMoreFilters.range,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
]
