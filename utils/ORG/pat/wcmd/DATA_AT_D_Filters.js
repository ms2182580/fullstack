import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Range2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range2"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

const DATA_AT_D_Filters = {
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

export const filtersUI_PAT = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.price.buttonName,
      min: DATA_AT_D_Filters.price.min,
      max: DATA_AT_D_Filters.price.max,
      labelName: DATA_AT_D_Filters.price.labelName,
      addCharacter: DATA_AT_D_Filters.price.addCharacter,
      whichMeasure: DATA_AT_D_Filters.price.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.weight.buttonName,
      min: DATA_AT_D_Filters.weight.min,
      max: DATA_AT_D_Filters.weight.max,
      labelName: DATA_AT_D_Filters.weight.labelName,
      addCharacter: DATA_AT_D_Filters.weight.addCharacter,
      whichMeasure: DATA_AT_D_Filters.weight.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.type.buttonName,
      titleOnModal: DATA_AT_D_Filters.type.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.type.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.mobility.buttonName,
      titleOnModal: DATA_AT_D_Filters.mobility.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.mobility.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.seat.buttonName,
      titleOnModal: DATA_AT_D_Filters.seat.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.seat.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.setting.buttonName,
      titleOnModal: DATA_AT_D_Filters.setting.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.setting.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: "AA_AT_SETTING_CHECKBOX",
  },
]
