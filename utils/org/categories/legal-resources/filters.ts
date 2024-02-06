import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import {
  TypeAllFiltersCheckbox,
  TypeAllFiltersRange,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

export const DATA_CR_D_Filters = {
  areasOfLaw: {
    buttonName: "Area(s) of Law",

    categoriesToDisplay: [
      "Civil Rights",
      "Disability Rights",
      "Public Accomodations",
      "Employment Discrimination",
      "Housing Discrimination",
      "Police Misconduct",
      "Prisoners' Rights",
      "Voting Rights",
      "Education Discrimination",
      "LGBTQ+",
      "Immigration Rights",
    ],
  },

  jurisdiction: {
    buttonName: "Jurisdiction",
    titleOnModal: "Jurisdictions Admitted to Practice",
    categoriesToDisplay: [
      "New York",
      "New Jersey",
      "Connecticut",
      "California",
      "Texas",
      "Florida",
      "Illinois",
      "Pennsylvania",
    ],
  },

  professionalExperience: {
    buttonName: "Professional Experience",
    categoriesToDisplay: [
      "Private Practice",
      "Law Firm",
      "Clerkship",
      "Government Agencies",
      "In-House Counsel",
      "Public Interest Organizations",
    ],
  },

  languajesSpoken: {
    buttonName: "Language(s) Spoken",
    categoriesToDisplay: [
      "English",
      "Spanish",
      "Cantonese",
      "Chinese",
      "Tagalog",
      "French",
    ],
  },

  moreFilters: {
    operationHours: {
      buttonName: "Operation Hours",
      categoriesToDisplay: [
        "Open Now",
        "Weekday",
        "Weekdays & Weekends",
        "After Hours",
      ],
    },

    payment: {
      buttonName: "Payment",
      categoriesToDisplay: [
        "Free Consultation",
        "Retainer Minimum",
        "Payment Plan",
        "Flat Fee",
        "Hourly Rate",
        "Contingency Fee",
      ],
    },
  },
}

export const FILTERS_RANGE: TypeAllFiltersRange = {
  price: {
    buttonName: "Price",
    minSpecialCharacter: "Pro Bono",
    min: "0",
    max: "100000.00",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },

  distance: {
    buttonName: "Distance",
    min: "0",
    max: "20",
    whichMeasure: "miles",
    addCharacter: "toRight",
  },
  agesServed: {
    buttonName: "Ages Served",
    min: "0",
    max: "100",
    maxSpecialCharacter: "100+",
    whichMeasure: "years",
    addCharacter: "toRight",
  },
}

/* 
!FH0
Get all filters for LEGAL. Here you will have "More Filters"
*/

export const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  level: {
    buttonName: "Hi-tech",
    categoriesToDisplay: ["High-tech", "Medium-tech", "Low-tech"],
    titleOnModal: "Hi-tech level",
  },

  operativeSystem: {
    buttonName: "Operative System",
    categoriesToDisplay: ["iOS", "Android", "Linux", "Windows"],
  },
}

export const filtersUI_LegalResources: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.price,
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: FILTERS_RANGE.weight,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.level,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.operativeSystem,
  },
]
