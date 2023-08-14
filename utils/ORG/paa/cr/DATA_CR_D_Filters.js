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
    categoriesToDisplay: ["New York", "New Jersey", "Connecticut", "California", "Texas", "Florida", "Illinois", "Pennsylvania"],
  },

  professionalExperience: {
    buttonName: "Professional Experience",
    categoriesToDisplay: ["Private Practice", "Law Firm", "Clerkship", "Government Agencies", "In-House Counsel", "Public Interest Organizations"],
  },

  languajesSpoken: {
    buttonName: "Language(s) Spoken",
    categoriesToDisplay: ["English", "Spanish", "Cantonese", "Chinese", "Tagalog", "French"],
  },

  operationHours: {
    buttonName: "Operation Hours",
    categoriesToDisplay: ["Open Now", "Weekday", "Weekdays & Weekends", "After Hours"],
  },

  payment: {
    buttonName: "Payment",
    categoriesToDisplay: ["Free Consultation", "Retainer Minimum", "Payment Plan", "Flat Fee", "Hourly Rate", "Contingency Fee"],
  },

  price: {
    buttonName: "Price",
    minimumSpecialCharacter: "Pro Bono",
    minimum: "0",
    maximum: "100000.00",
    whichMeasure: "$",
    addCharacter: "toLeft"
  },
  distance: {
    buttonName: "Distance",
    minimum: "0",
    maximum: "20",
    whichMeasure: "miles",
    addCharacter: "toRight"
  },
  agesServed: {
    buttonName: "Ages Served",
    minimum: "0",
    maximum: "100",
    maximumSpecialCharacter: "100+",
    whichMeasure: "years",
    addCharacter: "toRight"
  }

}
