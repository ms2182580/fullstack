import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Range_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Range_Isolated"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "@/utils/ORG_FiltersCategories"
import {
  TypeAllFiltersCheckbox,
  TypeAllFiltersRange,
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

export const FILTERS_RANGE: TypeAllFiltersRange = {
  age: {
    buttonName: "Age",
    min: "0",
    max: "100",
    maxSpecialCharacter: "+",
    addCharacterMaxSpecialCharacter: "toLeft",
    whichMeasure: "years",
    addCharacter: "toRight",
  },

  price: {
    buttonName: "Price",
    min: "0",
    max: "100000",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },
}

export const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  skillLevel: {
    buttonName: "Skill Level",
    categoriesToDisplay: [
      "Any Level",
      "Beginner",
      "Intermediate",
      "Advanced",
      "Expert",
    ],
  },
  term: {
    buttonName: "Term",
    categoriesToDisplay: ["Summer", "Spring", "Academic Year"],
  },
  duration: {
    buttonName: "Duration",
    categoriesToDisplay: [
      "All Classes",
      "Single Session",
      "Multiple Sessions",
      "Half-day sessions",
      "Full-day sessions",
      "Multi-day sessions",
    ],
  },
  daysOfTheWeek: {
    buttonName: "Days of the Week",
    categoriesToDisplay: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  cost: {
    buttonName: "Cost",
    categoriesToDisplay: [
      "Free",
      "Financial Aid/fee waiver",
      "Accepts Medicaid",
      "Membership/Subscription",
    ],
  },
}

const FILTERS_MORE: Type_AllMoreFilters = {
  RANGES: [
    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_DATA_D.distanceRange.buttonName}
      min={ORG_FILTERS_DATA_D.distanceRange.min}
      max={ORG_FILTERS_DATA_D.distanceRange.max}
      whichMeasure={ORG_FILTERS_DATA_D.distanceRange.whichMeasure}
      addCharacter={"toRight"}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.agesServed.titleToShow}
      min={ORG_FILTERS_DATA_D.agesServedRange.minimum}
      max={ORG_FILTERS_DATA_D.agesServedRange.maximum}
      whichMeasure={ORG_FILTERS_DATA_D.agesServedRange.whichMeasure}
      addCharacter={"toRight"}
      maxSpecialCharacter={
        ORG_FILTERS_DATA_D.agesServedRange.maxSpecialCharacter
      }
      addCharacterMaxSpecialCharacter={"toLeft"}
    />,
    <ORG_Filters_D_Range_Isolated
      buttonName={FILTERS_RANGE.price.buttonName}
      min={FILTERS_RANGE.price.min}
      max={FILTERS_RANGE.price.max}
      whichMeasure={FILTERS_RANGE.price.whichMeasure}
      addCharacter={FILTERS_RANGE.price.addCharacter}
    />,
  ],

  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.skillLevel.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.skillLevel.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.term.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.term.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.duration.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.duration.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    // <ORG_Filters_D_Checkbox_Isolated
    //   titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
    //   categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    // />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.daysOfTheWeek.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.daysOfTheWeek.categoriesToDisplay}
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
      titleOnModal={FILTERS_CHECKBOX.cost.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.cost.categoriesToDisplay}
    />,
  ],
}

export const filtersUI_CommunityInclusionClasses: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.skillLevel,
  },

  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.age,
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_DATA_D.distanceRange.buttonName,
      min: ORG_FILTERS_DATA_D.distanceRange.min,
      max: ORG_FILTERS_DATA_D.distanceRange.max,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
      addCharacter: "toRight",
    },
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.price,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.language.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
    },
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.insurance.titleToShowCard,
      categoriesToDisplay: ORG_FILTERS_DATA_D.insurance,
    },
  },
  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
