import { ORG_Filters_D_Checkbox2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_Range2"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"
import { DATA_MH_D_Filters } from "../mh/DATA_MH_D_Filters"

export const DATA_FS_D_Filters = {
  price: {
    buttonName: "Price",
    min: "100",
    max: "50000",
    labelName: "Budget",
    addCharacter: "toLeft",
    whichMeasure: "$",
  },
  weight: {
    buttonName: "Weight Capacity",
    min: "250",
    max: "500",
    labelName: "Weight Capacity",
    addCharacter: "toRight",
    whichMeasure: "weight",
  },
  type: {
    buttonName: "Type",
    titleOnModal: "Type of Wheelchair",
    categoriesToDisplay: ["Manual", "Power", "Transport", "Sports", "Standing"],
  },
  mobility: {
    buttonName: "Mobility",
    titleOnModal: "Mobility Features",
    categoriesToDisplay: ["Foldable", "Reclinig Backrests", "Adjustable Armrests", "Adjustable Leg Rests", "Power Elevating Seats", "Lightweight Frames"],
  },
  seat: {
    buttonName: "Seat",
    titleOnModal: "Seat Dimensions",
    categoriesToDisplay: ["36-50 cm", "50-70 cm", "+75 cm"],
  },
  setting: {
    buttonName: "Setting",
    titleOnModal: "Setting",
    categoriesToDisplay: ["Indoor", "Outdoor"],
  },
}

const allMoreFilters = {
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_MH_D_Filters.moreFilters.outOfPocketFees.buttonName}
      categoriesToDisplay={DATA_MH_D_Filters.moreFilters.outOfPocketFees.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.inMoreFilters}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.serviceSetting}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_MH_D_Filters.moreFilters.providerType.buttonName}
      categoriesToDisplay={DATA_MH_D_Filters.moreFilters.providerType.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.wheelChair.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.wheelChair}
    />,
  ],
}

export const renderFiltersInUI_MHSS_FS = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.diagnosis.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.diagnosis,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      min: ORG_FILTERS_DATA_D.agesServedRange.minimum,
      max: ORG_FILTERS_DATA_D.agesServedRange.maximum,
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      addCharacter: ORG_FILTERS_DATA_D.agesServedRange.addCharacter,
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
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
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_MH_D_Filters.viewOnly.buttonName,
      categoriesToDisplay: DATA_MH_D_Filters.viewOnly.categoriesToDisplay,
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
