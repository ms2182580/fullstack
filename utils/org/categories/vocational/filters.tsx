import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "@/utils/ORG_FiltersCategories"
import {
  TypeAllFiltersCheckbox,
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
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
}

const FILTERS_MORE: Type_AllMoreFilters = {
  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.benefits.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.benefits.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.wheelChair.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.wheelChair}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.datePosted.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.datePosted.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.companySize.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.companySize.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.companyName.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.companyName.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.employerValues.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.employerValues.categoriesToDisplay}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.diversity.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.diversity.categoriesToDisplay}
    />,
  ],
}

export const filtersUI_VocationalResources: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.jobType,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.workType,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.experienceLevel,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.salary,
  },

  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
