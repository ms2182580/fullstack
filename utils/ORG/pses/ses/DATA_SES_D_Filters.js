export const DATA_SES_D_Filters = {
  schoolType: {
    buttonName: "School Type",
    categoriesToDisplay: ["Public", "Private", "Private (DOE - Approved)", "Parochial Schools", "Montessori Schools", "Virtual Schools"],
  },

  price: {
    buttonName: "Price",
    minimum: "0",
    maximum: "100000",
    whichMeasure: "$",
    addCharacter: "toLeft",
  },

  moreFilters: {
    coed: {
      buttonName: "Coed",
      categoriesToDisplay: ["Coed", "All Boys", "All Girls"],
    },
    specialties: {
      buttonName: "Specialties",
      categoriesToDisplay: ["Online", "Special Education", "Therapeutic", "Educational", "Legal", "Business", "Technology", "Sports and Fitness", "Engineering", "Environmental"],
    },
    religion: {
      buttonName: "Religion",
      categoriesToDisplay: ["Catholic", "Christian", "Jewish", "Islam", "Hinduism", "Buddhism", "Taoism"],
    },
    servicesOffered: {
      buttonName: "Services Offered",
      categoriesToDisplay: [
        "Speech Therapy",
        "Physical Therapy",
        "Occupational Therapy",
        "Psychotherapy",
        "Rehabilitation",
        "Mental Health",
        "Nutritional",
        "Educational",
        "Home Health Care",
        "Alternative and Complementary Therapies",
        "Social Services",
      ],
    },
  },
}
