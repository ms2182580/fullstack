import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Range2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range2"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

import { DATA_MH_D_Filters } from "../../../../../../../utils/ORG/pmhss/mh/DATA_MH_D_Filters.js"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../../../../../utils/ORG_FiltersCategories.js"
import { ORG_Filters_D_Checkbox } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox.js"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../../filters/desktop/ORG_Filters_D_Checkbox_Isolated.js"
import { ORG_Filters_D_More } from "../../../../../filters/desktop/ORG_Filters_D_More.js"
import { ORG_Filters_D_Range } from "../../../../../filters/desktop/ORG_Filters_D_Range.js"
import { MH_D_Results_FilterListMainWrapper } from "./styles/MH_D_Results_FilterListMainWrapper.js"

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



export const renderFiltersInUI_MHSS_FS = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.price.buttonName,
      min: DATA_AT_D_Filters.price.min,
      max: DATA_AT_D_Filters.price.max,
      labelName: DATA_AT_D_Filters.price.labelName,
      addCharacter: DATA_AT_D_Filters.price.addCharacter,
      whichMeasure: DATA_AT_D_Filters.price.whichMeasure,
    },
    shouldAddClassName: false,

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
    shouldAddClassName: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.type.buttonName,
      titleOnModal: DATA_AT_D_Filters.type.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.type.categoriesToDisplay,
    },
    shouldAddClassName: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.mobility.buttonName,
      titleOnModal: DATA_AT_D_Filters.mobility.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.mobility.categoriesToDisplay,
    },
    shouldAddClassName: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.seat.buttonName,
      titleOnModal: DATA_AT_D_Filters.seat.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.seat.categoriesToDisplay,
    },
    shouldAddClassName: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_AT_D_Filters.setting.buttonName,
      titleOnModal: DATA_AT_D_Filters.setting.titleOnModal,
      categoriesToDisplay: DATA_AT_D_Filters.setting.categoriesToDisplay,
    },
    shouldAddClassName: "AA_AT_SETTING_CHECKBOX",
  },
]







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

export const MH_D_Results_FilterListMain = ({ refUserViewShowFullMapFilter }) => {
  // const { filtersLeftContext: filterData, setFiltersLeftContext: setFilterData } = useORG_Ctx_filtersLeftDesktop()



  return (
    <MH_D_Results_FilterListMainWrapper>
      <ORG_Filters_D_Checkbox
        buttonName={ORG_FILTERS_KEYS_D.diagnosis.titleToShow}
        categoriesToDisplay={ORG_FILTERS_DATA_D.diagnosis}
      />

      <ORG_Filters_D_Range
        min={ORG_FILTERS_DATA_D.agesServedRange.minimum}
        max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
        buttonName={ORG_FILTERS_KEYS_D.agesServedRange.buttonName}
        addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
        whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      />

      <ORG_Filters_D_Range
        min={ORG_FILTERS_DATA_D.distanceRange.minimum}
        max={ORG_FILTERS_DATA_D.distanceRange.maximum}
        buttonName={ORG_FILTERS_KEYS_D.distanceRange.buttonName}
        addCharacter={ORG_FILTERS_DATA_D.distanceRange.addCharacter}
        whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      />


      <ORG_Filters_D_Checkbox
        buttonName={DATA_MH_D_Filters.viewOnly.buttonName}
        categoriesToDisplay={DATA_MH_D_Filters.viewOnly.categoriesToDisplay}
      />


      <ORG_Filters_D_More allCheckboxes={allMoreFilters.checkbox} />
    </MH_D_Results_FilterListMainWrapper>
  )
}
