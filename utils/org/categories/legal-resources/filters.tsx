import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
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

// export const DATA_CR_D_Filters = {
//   // areasOfLaw: {
//   //   buttonName: "Area(s) of Law",

//   //   categoriesToDisplay: [
//   //     "Civil Rights",
//   //     "Disability Rights",
//   //     "Public Accomodations",
//   //     "Employment Discrimination",
//   //     "Housing Discrimination",
//   //     "Police Misconduct",
//   //     "Prisoners' Rights",
//   //     "Voting Rights",
//   //     "Education Discrimination",
//   //     "LGBTQ+",
//   //     "Immigration Rights",
//   //   ],
//   // },

//   // jurisdiction: {
//   //   buttonName: "Jurisdiction",
//   //   titleOnModal: "Jurisdictions Admitted to Practice",
//   //   categoriesToDisplay: [
//   //     "New York",
//   //     "New Jersey",
//   //     "Connecticut",
//   //     "California",
//   //     "Texas",
//   //     "Florida",
//   //     "Illinois",
//   //     "Pennsylvania",
//   //   ],
//   // },

//   // professionalExperience: {
//   //   buttonName: "Professional Experience",
//   //   categoriesToDisplay: [
//   //     "Private Practice",
//   //     "Law Firm",
//   //     "Clerkship",
//   //     "Government Agencies",
//   //     "In-House Counsel",
//   //     "Public Interest Organizations",
//   //   ],
//   // },

//   moreFilters: {
//     operationHours: {
//       buttonName: "Operation Hours",
//       categoriesToDisplay: [
//         "Open Now",
//         "Weekday",
//         "Weekdays & Weekends",
//         "After Hours",
//       ],
//     },

//     payment: {
//       buttonName: "Payment",
//       categoriesToDisplay: [
//         "Free Consultation",
//         "Retainer Minimum",
//         "Payment Plan",
//         "Flat Fee",
//         "Hourly Rate",
//         "Contingency Fee",
//       ],
//     },
//   },
// }

export const FILTERS_RANGE: TypeAllFiltersRange = {
  price: {
    buttonName: "Price",
    minSpecialCharacter: "Pro Bono",
    min: "0",
    max: "100000.00",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },
}

/* 
!FH0
Get all filters for LEGAL. Here you will have "More Filters"
*/

export const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
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
    buttonName: `${ORG_FILTERS_KEYS_D.language.alternativeTitle}`,
    categoriesToDisplay: ORG_FILTERS_DATA_D.languages,
  },

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
}

const FILTERS_MORE: Type_AllMoreFilters = {
  RANGES: [
    <ORG_Filters_D_Range_Isolated
      buttonName={FILTERS_RANGE.price.buttonName}
      minSpecialCharacter={FILTERS_RANGE.price.minSpecialCharacter}
      min={FILTERS_RANGE.price.min}
      max={FILTERS_RANGE.price.max}
      whichMeasure={FILTERS_RANGE.price.whichMeasure}
      addCharacter={FILTERS_RANGE.price.addCharacter}
    />,

    <ORG_Filters_D_Range_Isolated
      buttonName={ORG_FILTERS_KEYS_D.distance.titleToShow}
      min={ORG_FILTERS_DATA_D.distanceRange.minimum}
      max={ORG_FILTERS_DATA_D.distanceRange.maximum}
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
  ],
}

export const filtersUI_LegalResources: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.areasOfLaw,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.jurisdiction,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.professionalExperience,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.languajesSpoken,
  },
  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
