import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Range_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range_Isolated"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

export const DATA_CC_D_Filters = {
  skillLevel: {
    buttonName: "Skill Level",
    categoriesToDisplay: ["Any Level", "Beginner", "Intermediate", "Advanced", "Expert"],
  },
  age: {
    buttonName: "Age",
    minimum: "3",
    maximum: "100",
    whichMeasure: "years",
    addCharacter: "toRight",
  },
  distance: {
    buttonName: "Distance",
    minimum: "0",
    maximum: "20",
    whichMeasure: "miles",
    addCharacter: "toRight",
  },

  price: {
    buttonName: "Price",
    minimum: "0",
    maximum: "100000",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },

  moreFilters: {
    term: {
      buttonName: "Term",
      categoriesToDisplay: ["Summer", "Spring", "Academic Year"],
    },
    duration: {
      buttonName: "Duration",
      categoriesToDisplay: ["All Classes", "Single Session", "Multiple Sessions", "Half-day sessions", "Full-day sessions", "Multi-day sessions"],
    },
    daysOfTheWeek: {
      buttonName: "Days of the Week",
      categoriesToDisplay: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    cost: {
      buttonName: "Cost",
      categoriesToDisplay: ["Free", "Financial Aid/fee waiver", "Accepts Medicaid", "Membership/Subscription"],
    },
  },
}

const allMoreFilters = {
  range: [
    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CC_D_Filters.distance.buttonName}
      min={DATA_CC_D_Filters.distance.minimum}
      max={DATA_CC_D_Filters.distance.maximum}
      whichMeasure={DATA_CC_D_Filters.distance.whichMeasure}
      addCharacter={DATA_CC_D_Filters.distance.addCharacter}
    />,
    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.agesServedRange.buttonOnMoreFilter}
      min={ORG_FILTERS_DATA_D.agesServedRange.minimum}
      max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
      whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      addCharacter={ORG_FILTERS_DATA_D.agesServedRange.addCharacter}
    />,
    <ORG_Filters_D_Range_Isolated
      buttonName={DATA_CC_D_Filters.price.buttonName}
      min={DATA_CC_D_Filters.price.minimum}
      max={DATA_CC_D_Filters.price.maximum}
      whichMeasure={DATA_CC_D_Filters.price.whichMeasure}
      addCharacter={DATA_CC_D_Filters.age.addCharacter}
    />,
  ],

  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CC_D_Filters.skillLevel.buttonName}
      categoriesToDisplay={DATA_CC_D_Filters.skillLevel.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CC_D_Filters.moreFilters.term.buttonName}
      categoriesToDisplay={DATA_CC_D_Filters.moreFilters.term.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CC_D_Filters.moreFilters.duration.buttonName}
      categoriesToDisplay={DATA_CC_D_Filters.moreFilters.duration.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_CC_D_Filters.moreFilters.daysOfTheWeek.buttonName}
      categoriesToDisplay={DATA_CC_D_Filters.moreFilters.daysOfTheWeek.categoriesToDisplay}
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
      titleOnModal={DATA_CC_D_Filters.moreFilters.cost.buttonName}
      categoriesToDisplay={DATA_CC_D_Filters.moreFilters.cost.categoriesToDisplay}
    />,
  ],
}

export const renderFiltersInUI_CC_CC = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: DATA_CC_D_Filters.skillLevel.buttonName,
      categoriesToDisplay: DATA_CC_D_Filters.skillLevel.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.agesServedRange.buttonName,
      min: ORG_FILTERS_DATA_D.agesServedRange.minimum,
      max: ORG_FILTERS_DATA_D.agesServedRange.maximum,
      whichMeasure: ORG_FILTERS_DATA_D.agesServedRange.whichMeasure,
      addCharacter: ORG_FILTERS_DATA_D.agesServedRange.addCharacter,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false
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
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      min: DATA_CC_D_Filters.price.minimum,
      max: DATA_CC_D_Filters.price.maximum,
      buttonName: DATA_CC_D_Filters.price.buttonName,
      addCharacter: DATA_CC_D_Filters.price.addCharacter,
      whichMeasure: DATA_CC_D_Filters.price.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.meetingFormat.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.meetingFormat,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      allCheckboxes: allMoreFilters.checkbox,
      allRanges: allMoreFilters.range,
    },
  },
]
