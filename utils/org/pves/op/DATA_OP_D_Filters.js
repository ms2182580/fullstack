import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import { ORG_Filters_D_Checkbox2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/org/filters/desktop/ORG_Filters_D_More2"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D_ENUM } from "../../DATA_ORG_KeyNamesForFilters_D"

export const DATA_OP_D_Filters = {
  jobType: {
    buttonName: "job type",
    categoriesToDisplay: ["Full-time", "Part-time", "Contract", "Seasonal "],
  },
  workType: {
    buttonName: "work type",
    categoriesToDisplay: ["On-site", "Hybrid", "Remote"],
  },

  experienceLevel: {
    buttonName: "experience level",
    categoriesToDisplay: [
      "Internship",
      "Entry Level",
      "Associate",
      "Junior",
      "Senior",
      "Executive",
    ],
  },
  salary: {
    buttonName: "salary",
    categoriesToDisplay: [
      "$40,000+",
      "$50,000+",
      "$60,000+",
      "$70,000+",
      "$80,000+",
      "$90,000+",
      "$100,000+",
      "$150,000+",
      "$200,000+",
      "$300,000+",
      "$500,000+",
    ],
  },

  moreFilters: {
    benefits: {
      buttonName: "benefits",
      categoriesToDisplay: [
        "Medical insurance",
        "Dental insurance",
        "Vision insurance",
        "Retirement plans",
        "Pension plans",
        "Paid time-off",
        "Paid vocational training",
        "Flexible hours",
        "Flexible work arrangements",
        "Amendable contract",
        "Other",
      ],
    },
    datePosted: {
      buttonName: "date Posted",
      categoriesToDisplay: [
        "past 24 hours",
        "past Week",
        "past 2 Weeks",
        "past month",
        "any time",
      ],
    },
    companySize: {
      buttonName: "company size",
      categoriesToDisplay: [
        "9 or less",
        "49 or less",
        "99 or less",
        "499 or less",
        "999 or less",
        "4,999 or less",
        "9,999 or less",
        "more than 10,000",
      ],
    },
    companyName: {
      buttonName: "company Name",
      categoriesToDisplay: [
        "Amazon",
        "Arrow",
        "Braintrust",
        "Netflix",
        "Meta",
        "Google",
        "Tesla",
        "Microsoft",
        "Stripe",
        "PayPal",
        "IBM",
      ],
    },
    employerValues: {
      buttonName: "employer Values",
      categoriesToDisplay: [
        "Career growth and learning",
        "Diversity, equity and inclusion",
        "Environmental sustainability",
        "Continuous learning and development",
        "Work-life balance",
        "Teamwork and collaboration",
        "Proactivity",
        "Self Management",
        "Detail Attention",
        "Verbal and written communication",
        "Strategic vision",
        "Ability to give feedback",
        "Leadership",
      ],
    },
    diversity: {
      buttonName: "diversity",
      categoriesToDisplay: [
        "Neurodiverse",
        "Gender Identity",
        "Ethnic & Racial",
        "Age Diversity",
        "Language Diversity",
        "Lifestyle Choices",
      ],
    },
  },
}

const allMoreFilters = {
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_OP_D_Filters.moreFilters.benefits.buttonName}
      categoriesToDisplay={
        DATA_OP_D_Filters.moreFilters.benefits.categoriesToDisplay
      }
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_OP_D_Filters.moreFilters.datePosted.buttonName}
      categoriesToDisplay={
        DATA_OP_D_Filters.moreFilters.datePosted.categoriesToDisplay
      }
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_OP_D_Filters.moreFilters.companySize.buttonName}
      categoriesToDisplay={
        DATA_OP_D_Filters.moreFilters.companySize.categoriesToDisplay
      }
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_OP_D_Filters.moreFilters.companyName.buttonName}
      categoriesToDisplay={
        DATA_OP_D_Filters.moreFilters.companyName.categoriesToDisplay
      }
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_OP_D_Filters.moreFilters.employerValues.buttonName}
      categoriesToDisplay={
        DATA_OP_D_Filters.moreFilters.employerValues.categoriesToDisplay
      }
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_OP_D_Filters.moreFilters.diversity.buttonName}
      categoriesToDisplay={
        DATA_OP_D_Filters.moreFilters.diversity.categoriesToDisplay
      }
    />,
  ],
}

export const filtersUI_PVES = [
  {
    [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]: {
      buttonName: DATA_OP_D_Filters.jobType.buttonName,
      categoriesToDisplay: DATA_OP_D_Filters.jobType.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D_ENUM.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]: {
      buttonName: DATA_OP_D_Filters.workType.buttonName,
      categoriesToDisplay: DATA_OP_D_Filters.workType.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D_ENUM.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]: {
      buttonName: [ORG_FILTERS_KEYS_D.distance.updateState],
      minimum: [ORG_FILTERS_DATA_D.distanceRange.minimum],
      maximum: [ORG_FILTERS_DATA_D.distanceRange.maximum],
      whichMeasure: [ORG_FILTERS_DATA_D.distanceRange.whichMeasure],
      addCharacter: [ORG_FILTERS_DATA_D.distanceRange.addCharacter],
    },
    [DATA_ORG_KeyNamesForFilters_D_ENUM.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]: {
      buttonName: DATA_OP_D_Filters.experienceLevel.buttonName,
      categoriesToDisplay:
        DATA_OP_D_Filters.experienceLevel.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D_ENUM.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]: {
      buttonName: DATA_OP_D_Filters.salary.buttonName,
      categoriesToDisplay: DATA_OP_D_Filters.salary.categoriesToDisplay,
    },
    [DATA_ORG_KeyNamesForFilters_D_ENUM.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]: {
      allCheckboxes: allMoreFilters.checkbox,
    },
    [DATA_ORG_KeyNamesForFilters_D_ENUM.SHOULD_ADD_CLASSNAME]: false,
  },
]
